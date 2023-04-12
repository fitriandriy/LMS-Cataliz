import { RetrieveAllTaskRepository } from "../model/repository/retrieve-all.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";

export class RetrieveAllTaskUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(query: QueryInterface, options?: RetrieveAllOptionsInterface) {
    try {
      const response = await new RetrieveAllTaskRepository(this.db).handle(query, options);

      return {
        tasks: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
