import { AggregateCourseRepository } from "../model/repository/aggregate.repository.js";
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
            from: "users",
            localField: "createdBy_id",
            foreignField: "_id",
            as: "author",
          },
        },
        {
          $unwind: {
            path: "$author",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { user_id: "$author._id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
              { $project: { _id: 1, username:1, role: 1, email: 1 } },
            ],
            as: "author",
          },
        },
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
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "tasks",
            localField: "section._id",
            foreignField: "section_id",
            as: "section.task",
          },
        },
        {
          $lookup: {
            from: "lessons",
            localField: "section._id",
            foreignField: "section_id",
            as: "section.lesson",
          },
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

      return {
        courses: aggregate.data,
        pagination: aggregate.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
