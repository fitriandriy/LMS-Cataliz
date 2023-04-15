import { Router } from "express";
import * as controller from "./controller/index.js";
import { authMiddleware } from "@src/middleware/auth.middleware.js";

const router = Router();
router.get("/", controller.retrieveAllController);
router.post("/register", controller.registerController);
router.post("/login", controller.loginController);

router.use(authMiddleware);
router.post("/createCourse", controller.loginController);
export default router;
