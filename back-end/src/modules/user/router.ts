import { Router } from "express";
import * as controller from "./controller/index.js";

const router = Router();

router.get("/", controller.retrieveAllController);
router.post("/register", controller.registerController);

export default router;
