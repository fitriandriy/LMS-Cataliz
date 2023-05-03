import { NextFunction, Request, Response } from "express";
import { RetrieveCourseUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveCourseUseCase = new RetrieveCourseUseCase(db);
    const result = await retrieveCourseUseCase.handle(req.params.id);

    res.status(200).json({
      course: result.course,
    });
  } catch (error) {
    next(error);
  }
};
