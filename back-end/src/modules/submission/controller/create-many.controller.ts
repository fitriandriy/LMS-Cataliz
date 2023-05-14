import { NextFunction, Request, Response } from "express";
import { CreateManySubmissionUseCase } from "../use-case/create-many.use-case.js";
import { db } from "@src/database/database.js";

export const createManyController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const createManySubmissionUseCase = new CreateManySubmissionUseCase(db);
    const result = await createManySubmissionUseCase.handle(req.body, { session });

    await db.commitTransaction();

    res.status(201).json({
      insertedCount: result.insertedCount,
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
