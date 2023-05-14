import fs from "fs";
import { objClean } from "@point-hub/express-utils";
import { UpdateSubmissionRepository } from "../model/repository/update.repository.js";
import { SubmissionEntity } from "../model/submission.entity.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, {
  UpdateOptionsInterface,
  DocumentInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";

export class UpdatesubmissionUseCase {
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
                fs.writeFile(`uploads/file/${document.file.filename}`, document.file.originalname, (err) => {
                  if (err) {
                    return new Error("Error writing file");
                  } else {
                    return new Error("File deleted successfully");
                  }
                });
              }
            });
          } else {
            return new Error("No file provided");
          }
        }
      });

      // update database
      const submissionEntity = new SubmissionEntity({
        student_note: document.student_note,
        file: document.file.path,
        updatedAt: new Date(),
      });

      const submisisonRepository = new UpdateSubmissionRepository(this.db);
      await submisisonRepository.handle(id, objClean(submissionEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new UpdateSubmissionRepository(this.db).findCreatedById(id, options);
      if (typeof response == "undefined") {
        return Error("Not found");
      }

      return {
        id: response._id,
        file: response.file,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
