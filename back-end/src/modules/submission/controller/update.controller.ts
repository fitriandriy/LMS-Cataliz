import { NextFunction, Request, Response } from "express";
import { UpdateSubmissionUseCase } from "../use-case/update.use-case.js";
import { db } from "@src/database/database.js";

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateSubmissionUseCase = new UpdateSubmissionUseCase(db);
    const response = await updateSubmissionUseCase.findByUserId(req.params.userId);

    if (req.params.userRole !== "student" || req.params.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    req.body.userRole = req.params.userRole;
    req.body.userId = req.params.userId;

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
