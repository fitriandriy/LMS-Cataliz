import { Router } from "express";
import * as controller from "./controller/index.js";
import { authMiddleware } from "@src/middleware/auth.middleware.js";

const router = Router();
router.get("/", controller.retrieveAllController);
router.get("/:id", controller.retrieveController);
router.post("/", authMiddleware, controller.createController);
router.patch("/:id", authMiddleware, controller.updateController);
router.delete("/:id", authMiddleware, controller.deleteController);

export default router;
