import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { RegisterUserRepository } from "../model/repository/register.repository.js";
import { UserEntity, UserRoleTypes } from "../model/user.entity.js";
import { validate } from "../validation/register.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

interface TokenPayload {
  userId: string;
  userRole: string;
}

export class RegisterUserUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);
      const hashedPassword = hashSync(document.password, 10);

      // save to database
      const userEntity = new UserEntity({
        username: document.username,
        password: hashedPassword,
        email: document.email,
        phone_number: document.phone_number,
        role: document.role,
        createdAt: new Date(),
      });
      const response = await new RegisterUserRepository(this.db).handle(userEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }

  private generateToken(user: UserEntity): string {
    const payload: TokenPayload = { userId: user._id as string, userRole: user.role as string };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" });
    return token;
  }

  static verifyToken(token: string): TokenPayload {
    return jwt.verify(token, process.env.JWT_SECRET as string) as TokenPayload;
  }
}
