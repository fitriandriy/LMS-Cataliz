import bcrypt from "bcrypt";
import { RegisterUserRepository } from "../model/repository/register.repository.js";
import { UserEntity, UserRoleTypes } from "../model/user.entity.js";
import { validate } from "../validation/register.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export const passwordHash = (plainPassword: string): string => {
  const hash = bcrypt.hashSync(plainPassword, 10);
  return hash;
};

export const comparePassword = (plainPassword: string, passwordHash: string): boolean => {
  const compared = bcrypt.compareSync(plainPassword, passwordHash);
  return compared;
};

export class RegisterUserUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);
      const hash = passwordHash(document.password);

      // save to database
      const userEntity = new UserEntity({
        username: document.username,
        password: hash,
        email: document.email,
        phone_number: document.phone_number,
        role: UserRoleTypes.Student,
        createdAt: new Date(),
        token: document.token,
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
}
