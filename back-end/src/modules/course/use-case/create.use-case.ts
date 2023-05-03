import { CourseEntity } from "../model/course.entity.js";
import { CreateCourseRepository } from "../model/repository/create.repository.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const courseEntity = new CourseEntity({
        theme: document.theme,
        title: document.title,
        thumbnail: document.thumbnail,
        createdBy_id: document.userId,
        description: document.description,
        prerequisites: document.prerequisites,
        section: document.section,
        createdAt: new Date(),
      });

      const response = await new CreateCourseRepository(this.db).handle(courseEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
