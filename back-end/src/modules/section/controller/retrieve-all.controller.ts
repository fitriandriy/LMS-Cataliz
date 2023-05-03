import { NextFunction, Request, Response } from "express";
import { RetrieveAllSectionUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.userRole !== "facilitator") {
      res.sendStatus(403);
    }

    const retrieveAllCourseUseCase = new RetrieveAllSectionUseCase(db);
    const result = await retrieveAllCourseUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      sections: result.sections,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
