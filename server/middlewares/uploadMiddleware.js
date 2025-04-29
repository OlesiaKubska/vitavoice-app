import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = path.join("uploads", "avatars");

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `avatar-${req.user}${ext}`);
  },
});

export const upload = multer({ storage });
