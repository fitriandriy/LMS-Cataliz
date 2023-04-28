import { NextFunction, Request, Response } from "express";
import { CreateCourseUseCase } from "../use-case/create.use-case.js";
import { db } from "@src/database/database.js";

export const createController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    if (req.params.userRole !== "facilitator") {
      res.sendStatus(403);
    }

    req.body.userId = req.params.userId;
    req.body.userRole = req.params.userRole;

    req.body.thumbnail = req.file?.path;
    const createCourseUseCase = new CreateCourseUseCase(db);
    const result = await createCourseUseCase.handle(req.body, { session });

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
