import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { protectAdmin } from "../middlewares/adminMiddleware.js";
import {
  blockUser,
  unblockUser,
  getBlockedUsers,
  getFilteredUsers,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/dashboard", protect, protectAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!" });
});
router.patch("/block/:id", protect, protectAdmin, blockUser);
router.patch("/unblock/:id", protect, protectAdmin, unblockUser);
router.get("/blocked-users", protect, protectAdmin, getBlockedUsers);
router.get("/users", protect, protectAdmin, getFilteredUsers);

export default router;
