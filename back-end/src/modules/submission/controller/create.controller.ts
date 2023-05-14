import { NextFunction, Request, Response } from "express";
import { CreateSubmissionUseCase } from "../use-case/create.use-case.js";
import { db } from "@src/database/database.js";

export const createController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task_id = req.baseUrl.split("/");
    req.body.task_id = task_id[6];

    const session = db.startSession();

    db.startTransaction();

    if (req.params.userRole !== "student") {
      res.sendStatus(403);
    }

    req.body.userId = req.params.userId;
    req.body.userRole = req.params.userRole;

    req.body.file = req.file?.path;
    const createSubmissionUseCase = new CreateSubmissionUseCase(db);
    const result = await createSubmissionUseCase.handle(req.body, { session });

    await db.commitTransaction();

    res.status(201).json({
      _id: result._id,
    });
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
