import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { LoginUserRepository } from "../model/repository/login.repository.js";
import { UserEntity, UserRoleTypes } from "../model/user.entity.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface TokenPayload {
  userId: string;
}

interface ResponseInterface {
  _id: string;
  username?: string;
  email?: string;
  password?: string;
  phone_number?: string;
  role?: UserRoleTypes;
  createdAt?: Date;
}

export class LoginUserUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(username: string, password: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const user = await new LoginUserRepository(this.db).findByUsername(username, options);
      console.log(user);
      if (!user || !compareSync(password, user.password as string)) {
        throw new Error("Invalid username or password");
      }
      return { user, token: this.generateToken(user) };
    } catch (error) {
      throw error;
    }
  }

  private generateToken(user: UserEntity): string {
    const payload: TokenPayload = { userId: user._id as string };
    const token = jwt.sign(payload, "abc123", { expiresIn: "1h" });
    return token;
  }

  static verifyToken(token: string): TokenPayload {
    return jwt.verify(token, "abc123") as TokenPayload;
  }
}
