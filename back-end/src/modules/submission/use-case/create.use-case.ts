import { CreateSubmissionRepository } from "../model/repository/create.repository.js";
import { SubmissionEntity } from "../model/submission.entity.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateSubmissionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const courseEntity = new SubmissionEntity({
        file: document.file,
        student_note: document.student_note,
        createdBy_id: document.userId,
        task_id: document.task_id,
        report: document.report,
        createdAt: new Date(),
      });

      const response = await new CreateSubmissionRepository(this.db).handle(courseEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
