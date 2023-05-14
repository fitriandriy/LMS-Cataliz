import { NextFunction, Request, Response } from "express";
import { RetrieveAllSubmissionUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveAllSubmissionUseCase = new RetrieveAllSubmissionUseCase(db);
    const result = await retrieveAllSubmissionUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      submissions: result.submissions,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
