import express, { Express } from "express";
import courseRouter from "./modules/course/router.js";
import exampleRouter from "./modules/example/router.js";
import authRouter from "./modules/user/router.js";

export default function () {
  const app: Express = express();

  /**
   * Register all available modules
   * <modules>/router.ts
   */
  app.use("/v1/examples", exampleRouter);
  app.use("/users", authRouter);
  app.use("/courses", courseRouter);

  return app;
}
