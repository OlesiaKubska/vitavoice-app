import express from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
  updateName,
  updatePassword,
  uploadAvatar,
  deleteAvatar,
} from "../controllers/profileController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.patch("/update", protect, updateProfile);
router.delete("/delete", protect, deleteProfile);
router.patch("/profile/update-name", protect, updateName);
router.patch("/profile/update-password", protect, updatePassword);
router.post("/avatar", protect, upload.single("avatar"), uploadAvatar);
router.delete("/avatar", protect, deleteAvatar);

export default router;
