import express from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
  updateName,
  updatePassword,
} from "../controllers/profileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.patch("/update", protect, updateProfile);
router.delete("/delete", protect, deleteProfile);
router.patch("/profile/update-name", protect, updateName);
router.patch("/profile/update-password", protect, updatePassword);

export default router;
