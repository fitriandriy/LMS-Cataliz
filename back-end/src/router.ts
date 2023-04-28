import express, { Express } from "express";
import courseRouter from "./modules/course/router.js";
import discussionRouter from "./modules/discussion/router.js";
import exampleRouter from "./modules/example/router.js";
import sectionRouter from "./modules/section/router.js";
import submissionRouter from "./modules/submission/router.js";
import taskRouter from "./modules/task/router.js";
import authRouter from "./modules/user/router.js";

export default function () {
  const app: Express = express();

  /**
   * Register all available modules
   * <modules>/router.ts
   */
  app.use("/v1/examples", exampleRouter);
  app.use("/auth", authRouter);
  app.use("/submissions", submissionRouter);
  app.use("/courses", courseRouter);
  app.use("/courses/:course_id/tasks", taskRouter);
  app.use("/courses/:course_id/section", sectionRouter);
  app.use("/courses/:course_id/discussions", discussionRouter);

  return app;
}
