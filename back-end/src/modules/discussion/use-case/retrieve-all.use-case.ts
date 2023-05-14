import { AggregateDiscussionRepository } from "../model/repository/aggregate.repository.js";
import DatabaseConnection, { QueryInterface, RetrieveAllOptionsInterface } from "@src/database/connection.js";

export class RetrieveAllDiscussionUseCase {
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
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { user_id: "$user._id" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$user_id"] } } },
              { $project: { _id: 1, username:1, role: 1, email: 1 } },
            ],
            as: "user",
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
      const aggregate = await new AggregateDiscussionRepository(this.db).aggregate(pipeline, query, options);

      return {
        discussions: aggregate.data,
        pagination: aggregate.pagination,
      };
    } catch (error) {
      throw error;
    }
  }
}
