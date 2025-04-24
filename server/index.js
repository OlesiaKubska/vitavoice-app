import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("VitaVoice API is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
