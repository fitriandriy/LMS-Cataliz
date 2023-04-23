import { NextFunction, Request, Response } from "express";
import { RetrieveCourseUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createCourseUseCase = new RetrieveCourseUseCase(db);
    const result = await createCourseUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      title: result.title,
      thumbnail: result.thumbnail,
      description: result.description,
      prerequisites: result.prerequisites,
      section: result.section,
      createdBy_id: result.createdBy_id,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
