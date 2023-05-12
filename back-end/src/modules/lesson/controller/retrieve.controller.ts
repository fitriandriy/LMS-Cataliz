import { NextFunction, Request, Response } from "express";
import { RetrieveLessonsUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveLessonsUseCase = new RetrieveLessonsUseCase(db);
    const result = await retrieveLessonsUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      title: result.title,
      description: result.description,
      video_link: result.video_link,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
