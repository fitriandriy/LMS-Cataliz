import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { AggregateCourseRepository } from "../model/repository/aggregate.repository.js";
import { RetrieveCourseRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

export class RetrieveCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new mongoose.Types.ObjectId(id),
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
      // const response = await new RetrieveCourseRepository(this.db).handle(id, options);

      return {
        course: aggregate.data,
      };
    } catch (error) {
      throw error;
    }
  }
}
