import { NextFunction, Request, Response } from "express";
import { RetrieveAllDiscussionUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveAllDiscussionUseCase = new RetrieveAllDiscussionUseCase(db);
    const result = await retrieveAllDiscussionUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      discussions: result.discussions,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
