import express from "express";
import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.patch("/update", protect, updateProfile);
router.delete("/delete", protect, deleteProfile);

export default router;
