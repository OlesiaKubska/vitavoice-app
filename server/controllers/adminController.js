import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const blockUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });

    res.json({
      message: "User has been blocked",
      user: { id: user.id, isActive: user.isActive },
    });
  } catch (err) {
    console.error("Block error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const unblockUser = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { isActive: true },
    });

    res.json({
      message: "User has been unblocked",
      user: { id: user.id, isActive: user.isActive },
    });
  } catch (err) {
    console.error("Unblock error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlockedUsers = async (req, res) => {
  try {
    const blockedUsers = await prisma.user.findMany({
      where: { isActive: false },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    res.json(blockedUsers);
  } catch (err) {
    console.error("Error fetching blocked users:", err);
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

export const getFilteredUsers = async (req, res) => {
  try {
    const { status } = req.query;

    let where = {};
    if (status === "active") {
      where.isActive = true;
    } else if (status === "inactive") {
      where.isActive = false;
    }

    const users = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    });

    res.json(users);
  } catch (err) {
    console.error("Error filtering users:", err);
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};
