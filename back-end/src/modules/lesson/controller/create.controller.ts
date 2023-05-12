import { NextFunction, Request, Response } from "express";
import { CreateLessonsUseCase } from "../use-case/create.use-case.js";
import { db } from "@src/database/database.js";

export const createController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const section_id = req.baseUrl.split("/");
    req.body.section_id = section_id[4];

    const session = db.startSession();

    db.startTransaction();

    if (req.params.userRole !== "facilitator") {
      res.sendStatus(403);
    }

    const createLessonsUseCase = new CreateLessonsUseCase(db);
    const result = await createLessonsUseCase.handle(req.body, { session });

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
