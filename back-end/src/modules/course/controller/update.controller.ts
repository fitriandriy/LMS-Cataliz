import { NextFunction, Request, Response } from "express";
import { UpdateCourseUseCase } from "../use-case/update.use-case.js";
import { db } from "@src/database/database.js";

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateCourseUseCase = new UpdateCourseUseCase(db);
    const response = await updateCourseUseCase.findCreatedById(req.params.id);

    if (req.body.userRole !== "facilitator" || req.body.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    await updateCourseUseCase.handle(req.params.id, req.body, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
