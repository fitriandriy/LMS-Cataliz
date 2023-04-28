import { NextFunction, Request, Response } from "express";
import { CreateDiscussionUseCase } from "../use-case/create.use-case.js";
import { db } from "@src/database/database.js";

export const createController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const course_id = req.baseUrl.split("/");
    req.body.baseUrl = course_id[2];
    const session = db.startSession();

    db.startTransaction();
    const createDiscussionUseCase = new CreateDiscussionUseCase(db);
    const result = await createDiscussionUseCase.handle(req.body, { session });

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