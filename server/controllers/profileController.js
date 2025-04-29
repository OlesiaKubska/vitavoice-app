import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProfile = async (req, res) => {
  const { name, password } = req.body;

  try {
    const dataToUpdate = {};
    if (name) dataToUpdate.name = name;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      dataToUpdate.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user },
      data: dataToUpdate,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.user },
    });

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateName = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  try {
    const user = await prisma.user.update({
      where: { id: req.user },
      data: { name },
    });
    res.json({
      message: "Name updated",
      user: { id: user.id, name: user.name },
    });
  } catch (error) {
    console.error("Name update error:", error);
    res.status(500).json({ message: "Failed to update name" });
  }
};

export const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword)
    return res.status(400).json({ message: "Both passwords are required" });

  try {
    const user = await prisma.user.findUnique({ where: { id: req.user } });
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect current password" });

    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: req.user },
      data: { password: hashed },
    });

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Password update error:", error);
    res.status(500).json({ message: "Failed to update password" });
  }
};

export const uploadAvatar = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const avatarPath = `/uploads/avatars/${req.file.filename}`;
    const user = await prisma.user.update({
      where: { id: req.user },
      data: { avatar: avatarPath },
    });

    res.json({ message: "Avatar uploaded", avatar: user.avatar });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteAvatar = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user },
    });

    if (user.avatar) {
      const fullPath = path.join(
        "uploads",
        "avatars",
        path.basename(user.avatar)
      );
      fs.unlink(fullPath, (err) => {
        if (err) console.error("Failed to delete file:", err);
      });
    }

    await prisma.user.update({
      where: { id: req.user },
      data: { avatar: null },
    });

    res.json({ message: "Avatar deleted" });
  } catch (error) {
    console.error("Avatar deletion error:", error);
    res.status(500).json({ message: "Failed to delete avatar" });
  }
};
