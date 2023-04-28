import { NextFunction, Request, Response } from "express";
import { RetrieveSectionUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveSectionUseCase = new RetrieveSectionUseCase(db);
    const result = await retrieveSectionUseCase.handle(req.params.id);

    if (req.params.userRole !== "facilitator") {
      res.sendStatus(403);
    }

    res.status(200).json({
      id: result._id,
      deadline: result.deadline,
      title: result.title,
      video_link: result.video_link,
      description: result.description,
      task_id: result.task_id,
      course_id: result.course_id,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
