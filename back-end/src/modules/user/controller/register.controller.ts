import { NextFunction, Request, Response } from "express";
import { RegisterUserUseCase } from "../use-case/register.use-case.js";
import { db } from "@src/database/database.js";

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const registerUserUseCase = new RegisterUserUseCase(db);
    const data = await registerUserUseCase.handle(req.body, { session });

    await db.commitTransaction();

    res.status(201).json({
      data
    });
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
