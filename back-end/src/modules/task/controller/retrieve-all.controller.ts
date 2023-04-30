import { NextFunction, Request, Response } from "express";
import { RetrieveAllTaskUseCase } from "../use-case/retrieve-all.use-case.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const retrieveAllController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const retrieveAllTaskUseCase = new RetrieveAllTaskUseCase(db);
    const result = await retrieveAllTaskUseCase.handle(req.query as unknown as QueryInterface);

    res.status(200).json({
      tasks: result.tasks,
      pagination: result.pagination,
    });
  } catch (error) {
    next(error);
  }
};
