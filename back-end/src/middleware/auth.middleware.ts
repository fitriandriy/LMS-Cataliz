import { Request, Response, NextFunction } from "express";
import { RegisterUserUseCase } from "@src/modules/user/use-case/register.use-case.js";

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res.status(401).json({ error: "Authorization header missing" });
    return;
  }

  const token = authorizationHeader.split(" ")[1];
  try {
    const payload = RegisterUserUseCase.verifyToken(token);
    req.body.userId = payload.userId;
    req.body.userRole = payload.userRole;
    
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
