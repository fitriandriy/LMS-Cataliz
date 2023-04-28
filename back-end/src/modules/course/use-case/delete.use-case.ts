import fs from "fs";
import { DeleteCourseRepository } from "../model/repository/delete.repository.js";
import DatabaseConnection, {
  DeleteOptionsInterface,
  DocumentInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";

export class DeleteCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: DeleteOptionsInterface) {
    try {
      fs.access(document.filename, fs.constants.F_OK, (err) => {
        if (err) {
          return new Error("File Not Found");
        } else {
          // Delete file if it exists
          fs.unlink(document.filename, (err) => {
            if (err) {
              return new Error("Error deleting file");
            } else {
              return new Error("File deleted successfully");
            }
          });
        }
      });

      const response = await new DeleteCourseRepository(this.db).handle(document.id, options);

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
        thumbnail: response.thumbnail,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
