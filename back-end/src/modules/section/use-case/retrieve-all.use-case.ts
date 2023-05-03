import { AggregateSectionRepository } from "../model/repository/aggregate.repository.js";
import { RetrieveAllSectionRepository } from "../model/repository/retrieve-all.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";

export class RetrieveAllSectionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(query: QueryInterface, options?: RetrieveAllOptionsInterface) {
    try {
      const pipeline = [{ $lookup: { from: "courses", localField: "course_id", foreignField: "_id", as: "course" } }];
      const query = {
        fields: "",
        filter: {},
        page: 1,
        pageSize: 10,
        sort: "",
      };
      const aggregate = await new AggregateSectionRepository(this.db).aggregate(pipeline, query, options);

      return {
        sections: aggregate.data,
        pagination: aggregate.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
