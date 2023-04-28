import { RetrieveSectionRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  deadline?: Date;
  title?: string;
  description?: string;
  video_link?: string;
  task_id?: string;
  course_id?: string;
  createdAt?: Date;
}

export class RetrieveSectionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveSectionRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        deadline: response.deadline,
        title: response.title,
        video_link: response.video_link,
        description: response.description,
        task_id: response.task_id,
        course_id: response.course_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
