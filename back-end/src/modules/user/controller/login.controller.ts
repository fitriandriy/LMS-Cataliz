import { NextFunction, Request, Response } from "express";
import { LoginUserUseCase } from "../use-case/login.use-case.js";
import { db } from "@src/database/database.js";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginUserUseCase = new LoginUserUseCase(db);
    const data = await loginUserUseCase.handle(req.body.username, req.body.password);

    res.status(201).json({
      user: data.user,
      token: data.token,
    });
  } catch (error) {
    next(error);
  }
};
