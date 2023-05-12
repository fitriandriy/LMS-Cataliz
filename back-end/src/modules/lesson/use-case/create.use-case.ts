import { LessonsEntity } from "../model/lesson.entity.js";
import { CreateLessonsRepository } from "../model/repository/create.repository.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateLessonsUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const lessonsEntity = new LessonsEntity({
        title: document.title,
        video_link: document.video_link,
        section_id: document.section_id,
        description: document.description,
        createdAt: new Date(),
      });

      const response = await new CreateLessonsRepository(this.db).handle(lessonsEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
