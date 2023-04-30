import { NextFunction, Request, Response } from "express";
import { RetrieveAllCourseUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveAllCourseUseCase = new RetrieveAllCourseUseCase(db);
    const result = await retrieveAllCourseUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      courses: result.courses,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
