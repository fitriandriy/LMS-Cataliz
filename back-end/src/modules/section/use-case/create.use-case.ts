import { CreateSectionRepository } from "../model/repository/create.repository.js";
import { SectionEntity } from "../model/section.entity.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateSectionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const sectionEntity = new SectionEntity({
        title: document.title,
        video_link: document.video_link,
        course_id: document.course_id,
        description: document.description,
        createdAt: new Date(),
      });

      const response = await new CreateSectionRepository(this.db).handle(sectionEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
