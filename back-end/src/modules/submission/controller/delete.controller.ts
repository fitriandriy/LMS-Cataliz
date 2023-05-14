import { NextFunction, Request, Response } from "express";
import { DeleteSubmissionUseCase } from "../use-case/delete.use-case.js";
import { db } from "@src/database/database.js";

export const deleteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const deleteSubmissionUseCase = new DeleteSubmissionUseCase(db);
    const response = await deleteSubmissionUseCase.findCreatedById(req.params.id);
    if (req.params.userRole !== "student" || req.params.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    req.params.filename = response.thumbnail;

    await deleteSubmissionUseCase.handle(req.params, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
