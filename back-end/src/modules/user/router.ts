import { Router } from "express";
import * as controller from "./controller/index.js";
import { authMiddleware } from "@src/middleware/auth.middleware.js";

const router = Router();
router.get("/users", authMiddleware, controller.retrieveAllController);
router.get("/user/:id", authMiddleware, controller.retrieveController);
router.post("/register", controller.authRegisterController);
router.post("/login", controller.authLoginController);
router.post("/logout", authMiddleware, controller.authLogoutController);

export default router;
