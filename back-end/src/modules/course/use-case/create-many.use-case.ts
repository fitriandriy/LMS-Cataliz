import { CourseEntity } from "../model/course.entity.js";
import { CreateManyCourseRepository } from "../model/repository/create-many.repository.js";
import { validate } from "../validation/create-many.validation.js";
import DatabaseConnection, { CreateManyOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateManyCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(documents: Array<DocumentInterface>, options: CreateManyOptionsInterface) {
    try {
      // validate request body
      validate(documents);

      // define entity
      const entities = [];
      for (const document of documents) {
        entities.push(
          new CourseEntity({
            title: document.title,
            description: document.description,
            prerequisites: document.prerequisites,
            theme: document.theme,
            thumbnail: document.thumbnail,
            createdAt: new Date(),
          })
        );
      }

      // save to database
      const response = await new CreateManyCourseRepository(this.db).handle(entities, options);

      return {
        acknowledged: response.acknowledged,
        insertedCount: response.insertedCount,
        insertedIds: response.insertedIds,
      };
    } catch (error) {
      throw error;
    }
  }
}
