import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { protectAdmin } from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/dashboard", protect, protectAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

export default router;
