import { RetrieveDiscussionRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  comment?: string;
  course_id?: string;
  createdBy_id?: string;
  createdAt?: Date;
}

export class RetrieveDiscussionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveDiscussionRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        comment: response.comment,
        course_id: response.course_id,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
