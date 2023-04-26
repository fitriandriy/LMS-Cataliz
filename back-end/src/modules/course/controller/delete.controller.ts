import { NextFunction, Request, Response } from "express";
import { DeleteCourseUseCase } from "../use-case/delete.use-case.js";
import { db } from "@src/database/database.js";

export const deleteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const deleteCourseUseCase = new DeleteCourseUseCase(db);
    const response = await deleteCourseUseCase.findCreatedById(req.params.id);

    if (req.body.userRole !== "facilitator" || req.body.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    await deleteCourseUseCase.handle(req.params.id, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
