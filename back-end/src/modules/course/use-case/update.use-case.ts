import fs from "fs";
import { objClean } from "@point-hub/express-utils";
import { CourseEntity } from "../model/course.entity.js";
import { UpdateCourseRepository } from "../model/repository/update.repository.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, {
  UpdateOptionsInterface,
  DocumentInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";

export class UpdateCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);
      fs.access(document.old_thumbnail, fs.constants.F_OK, (err) => {
        if (err) {
          return new Error("File Not Found");
        } else {
          // Update file if it exists
          if (document.file) {
            fs.unlink(document.old_thumbnail, (err) => {
              if (err) {
                return new Error("Error deleting file");
              } else {
                fs.writeFile(
                  `uploads/courses/thumbnail/${document.file.filename}`,
                  document.file.originalname,
                  (err) => {
                    if (err) {
                      return new Error("Error writing file");
                    } else {
                      return new Error("File deleted successfully");
                    }
                  }
                );
              }
            });
          } else {
            return new Error("No file provided");
          }
        }
      });

      // update database
      const courseEntity = new CourseEntity({
        title: document.title,
        thumbnail: document.file.path,
        description: document.description,
        prerequisites: document.prerequisites,
        updatedAt: new Date(),
      });

      const courseRepository = new UpdateCourseRepository(this.db);
      await courseRepository.handle(id, objClean(courseEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new UpdateCourseRepository(this.db).findCreatedById(id, options);
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
