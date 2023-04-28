import { RetrieveAllSectionRepository } from "../model/repository/retrieve-all.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";

export class RetrieveAllSectionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(query: QueryInterface, options?: RetrieveAllOptionsInterface) {
    try {
      const response = await new RetrieveAllSectionRepository(this.db).handle(query, options);

      return {
        sections: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
