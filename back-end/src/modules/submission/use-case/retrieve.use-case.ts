import { RetrieveSubmissionRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  student_note?: string;
  createdBy_id?: string;
  task_id?: string;
  file?: string;
  createdAt?: Date;
}

export class RetrieveSubmissionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveSubmissionRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        student_note: response.student_note,
        createdBy_id: response.createdBy_id,
        file: response.file,
        task_id: response.task_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
