import { RetrieveAllLessonsRepository } from "../model/repository/retrieve-all.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";

export class RetrieveAllLessonsUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(query: QueryInterface, options?: RetrieveAllOptionsInterface) {
    try {
      const response = await new RetrieveAllLessonsRepository(this.db).handle(query, options);

      return {
        lessons: response.data,
        pagination: response.pagination,
      };
      
    } catch (error) {
      throw error;
    }
  }
}
