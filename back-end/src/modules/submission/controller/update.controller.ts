import { NextFunction, Request, Response } from "express";
import { UpdateSubmissionUseCase } from "../use-case/update.use-case.js";
import { db } from "@src/database/database.js";

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateSubmissionUseCase = new UpdateSubmissionUseCase(db);
    const response = await updateSubmissionUseCase.findByUserId(req.body.userId);

    if (req.body.userRole !== "student" || req.body.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    await updateSubmissionUseCase.handle(req.params.id, req.body, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
