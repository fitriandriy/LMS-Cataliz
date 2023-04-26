import { RetrieveSubmissionRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  file?: string;
  student_note?: string;
  task_id?: string;
  report?: {
    acceptance_status: boolean;
    criteria: CriteriaInterface[];
    reviewer_note: string;
    grade: number;
  };
  criteria?: string;
  createdBy_id?: string;
  createdAt?: Date;
}

export interface CriteriaInterface {
  name: string;
  status: boolean;
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
        file: response.file,
        student_note: response.student_note,
        task_id: response.task_id,
        report: response.report,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
