import { objClean } from "@point-hub/express-utils";
import { CourseEntity } from "../model/course.entity.js";
import { UpdateCourseRepository } from "../model/repository/update.repository.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, { UpdateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UpdateCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const courseEntity = new CourseEntity({
        title: document.title,
        thumbnail: document.thumbnail,
        createdBy_id: document.createdBy_id,
        description: document.description,
        prerequisites: document.prerequisites,
        section: document.section,
        updatedAt: new Date(),
      });

      const courseRepository = new UpdateCourseRepository(this.db);
      await courseRepository.handle(id, objClean(courseEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }
}
