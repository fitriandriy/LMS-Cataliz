import fs from "fs";
import { DeleteCourseRepository } from "../model/repository/delete.repository.js";
import DatabaseConnection, { DeleteOptionsInterface, RetrieveOptionsInterface } from "@src/database/connection.js";

export class DeleteCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options: DeleteOptionsInterface) {
    try {
      fs.access(`uploads/courses/thumbnail/${id}`, fs.constants.F_OK, (err) => {
        if (err) {
          return "File not found";
        } else {
          // Delete file if it exists
          fs.unlink(`uploads/courses/thumbnail/${id}`, (err) => {
            if (err) {
              return "Error deleting file";
            } else {
              return "File deleted successfully";
            }
          });
        }
      });

      const response = await new DeleteCourseRepository(this.db).handle(id, options);

      return {
        acknowledged: response.acknowledged,
        deletedCount: response.deletedCount,
      };
    } catch (error) {
      throw error;
    }
  }

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new DeleteCourseRepository(this.db).findCreatedById(id, options);
      if (typeof response == "undefined") {
        return Error("Not found");
      }

      return {
        id: response._id,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
