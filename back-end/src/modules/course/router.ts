import { Router, Request, Response, NextFunction } from "express";
import multer, { Multer } from "multer";
import * as controller from "./controller/index.js";
import { authMiddleware } from "@src/middleware/auth.middleware.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/courses/thumbnail");
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
router.get("/", controller.retrieveAllController);
router.get("/:id", controller.retrieveController);
router.post("/", upload.single("thumbnail"), authMiddleware, controller.createController);
// router.patch(
//   "/:id",
//   authMiddleware,
//   upload.single("thumbnail"),
//   (req: Request, res: Response) => {
//     const id = req.params.id;
//     // Check if file exists for given ID
//     fs.access(`uploads/courses/thumbnail/${id}`, fs.constants.F_OK, (err) => {
//       if (err) {
//         res.status(404).send("File not found");
//       } else {
//         // Update file if it exists
//         if (req.file) {
//           fs.unlink(`uploads/${id}`, (err) => {
//             if (err) {
//               res.status(500).send("Error deleting file");
//             } else {
//               fs.writeFile(`uploads/${req.file.originalname}`, req.file.buffer, (err) => {
//                 if (err) {
//                   res.status(500).send("Error writing file");
//                 } else {
//                   res.send("File updated successfully");
//                 }
//               });
//             }
//           });
//         } else {
//           res.status(400).send("No file provided");
//         }
//       }
//     });
//   },
//   controller.updateController
// );
router.patch("/:id", upload.single("thumbnail"), authMiddleware, controller.updateController);
router.delete("/:id", authMiddleware, controller.deleteController);

export default router;
