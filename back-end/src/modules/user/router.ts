import { Router } from "express";
import * as controller from "./controller/index.js";

const router = Router();

router.post("/login", controller.loginController);
router.post("/register", controller.registerController);

export default router;
