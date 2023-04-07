import { RetrieveCourseRepository } from "../model/repository/retrieve.repository.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";

interface ResponseInterface {
  _id: string;
  title?: string;
  thumbnail?: string;
  description?: string;
  prerequisites?: string;
  section?: string;
  createdBy_id?: string;
  createdAt?: Date;
}

export class RetrieveCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    try {
      const response = await new RetrieveCourseRepository(this.db).handle(id, options);

      return {
        _id: response._id,
        title: response.title,
        thumbnail: response.thumbnail,
        description: response.description,
        prerequisites: response.prerequisites,
        section: response.section,
        createdBy_id: response.createdBy_id,
        createdAt: response.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }
}
