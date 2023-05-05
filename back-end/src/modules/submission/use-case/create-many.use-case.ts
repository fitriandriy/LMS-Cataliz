import { CreateManySubmissionRepository } from "../model/repository/create-many.repository.js";
import { SubmissionEntity } from "../model/submission.entity.js";
import { validate } from "../validation/create-many.validation.js";
import DatabaseConnection, { CreateManyOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateManySubmissionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(documents: Array<DocumentInterface>, options: CreateManyOptionsInterface) {
    try {
      // validate request body
      validate(documents);

      // define entity
      const entities = [];
      for (const document of documents) {
        entities.push(
          new SubmissionEntity({
            file: document.file,
            student_note: document.student_note,
            createdBy_id: document.createdBy_id,
            task_id: document.task_id,
            createdAt: new Date(),
          })
        );
      }

      // save to database
      const response = await new CreateManySubmissionRepository(this.db).handle(entities, options);

      return {
        acknowledged: response.acknowledged,
        insertedCount: response.insertedCount,
        insertedIds: response.insertedIds,
      };
    } catch (error) {
      throw error;
    }
  }
}
