import { Router } from "express";
import multer from "multer";
import * as controller from "./controller/index.js";
import { authMiddleware } from "@src/middleware/auth.middleware.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/submission/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg" && file.mimetype !== "image/jpg") {
      cb(new Error("Invalid file type"));
    } else {
      cb(null, true);
    }
  },
});

const router = Router();
router.get("/", authMiddleware, controller.retrieveAllController);
router.get("/:id", authMiddleware, controller.retrieveController);
router.post("/", authMiddleware, upload.single("file"), controller.createController);
router.patch("/:id", authMiddleware, upload.single("file"), controller.updateController);
router.delete("/:id", authMiddleware, controller.deleteController);

export default router;
