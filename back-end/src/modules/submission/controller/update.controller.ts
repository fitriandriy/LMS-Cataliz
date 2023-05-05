import { NextFunction, Request, Response } from "express";
import { UpdatesubmissionUseCase } from "../use-case/update.use-case.js";
import { db } from "@src/database/database.js";

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updatesubmissionUseCase = new UpdatesubmissionUseCase(db);
    const response = await updatesubmissionUseCase.findCreatedById(req.params.id);

    if (req.params.userRole !== "student" || req.params.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }
    req.body.old_thumbnail = response.thumbnail;
    req.body.file = req.file;
    await updatesubmissionUseCase.handle(req.params.id, req.body, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
