import { NextFunction, Request, Response } from "express";
import { RetrieveAllLessonsUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveAllLessonsUseCase = new RetrieveAllLessonsUseCase(db);
    const result = await retrieveAllLessonsUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      lessons: result.lessons,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
