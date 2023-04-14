import { NextFunction, Request, Response } from "express";
import { RetrieveTaskUseCase } from "../use-case/retrieve.use-case.js";
import { db } from "@src/database/database.js";

export const retrieveController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createTaskUseCase = new RetrieveTaskUseCase(db);
    const result = await createTaskUseCase.handle(req.params.id);

    res.status(200).json({
      _id: result._id,
      deadline: result.deadline,
      description: result.description,
      criteria: result.criteria,
      createdAt: result.createdAt,
    });
  } catch (error) {
    next(error);
  }
};
