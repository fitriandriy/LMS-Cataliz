import { NextFunction, Request, Response } from "express";
import { DeleteSectionUseCase } from "../use-case/delete.use-case.js";
import { db } from "@src/database/database.js";

export const deleteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    if (req.params.userRole !== "facilitator") {
      res.sendStatus(403);
    }

    const deleteSectionUseCase = new DeleteSectionUseCase(db);

    await deleteSectionUseCase.handle(req.params.id, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};