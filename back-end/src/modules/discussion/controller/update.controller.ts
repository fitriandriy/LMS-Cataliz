import { NextFunction, Request, Response } from "express";
import { UpdateDiscussionUseCase } from "../use-case/update.use-case.js";
import { db } from "@src/database/database.js";

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateDiscussionUseCase = new UpdateDiscussionUseCase(db);
    const response = await updateDiscussionUseCase.findByUserId(req.body.userId);

    if (req.body.userId !== response.createdBy_id) {
      res.status(401).send("Unauthorized");
    }

    await updateDiscussionUseCase.handle(req.params.id, req.body, { session });

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
