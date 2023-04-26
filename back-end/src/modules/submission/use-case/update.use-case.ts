import { objClean } from "@point-hub/express-utils";
import { UpdateSubmissionRepository } from "../model/repository/update.repository.js";
import { SubmissionEntity } from "../model/submission.entity.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, {
  UpdateOptionsInterface,
  DocumentInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";

export class UpdateSubmissionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const submissionEntity = new SubmissionEntity({
        file: document.file,
        student_note: document.student_note,
        createdBy_id: document.userId,
        task_id: document.task_id,
        report: document.report,
        updatedAt: new Date(),
      });

      const submissionRepository = new UpdateSubmissionRepository(this.db);
      await submissionRepository.handle(id, objClean(submissionEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }

  public async findByUserId(userId: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new UpdateSubmissionRepository(this.db).findByUserID(userId, options);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
