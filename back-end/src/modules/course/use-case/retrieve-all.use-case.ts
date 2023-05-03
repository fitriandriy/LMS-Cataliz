import { AggregateCourseRepository } from "../model/repository/aggregate.repository.js";
import { RetrieveAllCourseRepository } from "../model/repository/retrieve-all.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";
export class RetrieveAllCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(query: QueryInterface, options?: RetrieveAllOptionsInterface) {
    try {
      const pipeline = [
        {
          $lookup: {
            from: "sections",
            localField: "_id",
            foreignField: "course_id",
            as: "section",
          },
        },
        {
          $unwind: {
            path: "$section",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "tasks",
            localField: "section._id",
            foreignField: "section_id",
            as: "section.task"
          }
        },
      ];
      const query = {
        fields: "",
        filter: {},
        page: 1,
        pageSize: 10,
        sort: "",
      };
      const aggregate = await new AggregateCourseRepository(this.db).aggregate(pipeline, query, options);
      // const response = await new RetrieveAllCourseRepository(this.db).handle(query, options);

      return {
        courses: aggregate.data,
        pagination: aggregate.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
