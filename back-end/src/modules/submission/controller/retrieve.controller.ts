import { NextFunction, Request, Response } from "express";
import { RetrieveSubmissionUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createCourseUseCase = new RetrieveSubmissionUseCase(db);
    const result = await createCourseUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      file: result.file,
      student_note: result.student_note,
      task_id: result.task_id,
      report: result.report,
      createdBy_id: result.createdBy_id,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
