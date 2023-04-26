import { RetrieveUserRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  username?: string;
  email?: string;
  role?: string;
  createdAt?: Date;
}

export class RetrieveUserUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(username: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new RetrieveUserRepository(this.db).handle(username, options);

      return {
        username: response.username,
        email: response.email,
        role: response.role,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }

}
