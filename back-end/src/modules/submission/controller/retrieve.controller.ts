import { NextFunction, Request, Response } from "express";
import { RetrieveSubmissionUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveSubmissionUseCase = new RetrieveSubmissionUseCase(db);
    const result = await retrieveSubmissionUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      file: result.file,
      student_note: result.student_note,
      createdBy_id: result.createdBy_id,
      task_id: result.task_id,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
