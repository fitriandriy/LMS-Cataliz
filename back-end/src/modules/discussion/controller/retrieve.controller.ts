import { NextFunction, Request, Response } from "express";
import { RetrieveDiscussionUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveDiscussionUseCase = new RetrieveDiscussionUseCase(db);
    const result = await retrieveDiscussionUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      course_id: result.course_id,
      comment: result.comment,
      createdBy_id: result.createdBy_id,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
