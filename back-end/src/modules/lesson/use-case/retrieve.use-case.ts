import { RetrieveLessonsRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  title?: string;
  video_link?: string;
  description?: string;
  createdAt?: Date;
}

export class RetrieveLessonsUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveLessonsRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        title: response.title,
        video_link: response.video_link,
        description: response.description,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
