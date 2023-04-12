import { RetrieveTaskRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  deadline?: Date;
  criteria?: object;
  description?: string;
  createdAt?: Date;
}

export class RetrieveTaskUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveTaskRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        deadline: response.deadline,
        criteria: response.criteria,
        description: response.description,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
