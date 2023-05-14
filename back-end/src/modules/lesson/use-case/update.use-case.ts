import { objClean } from "@point-hub/express-utils";
import { LessonsEntity } from "../model/lesson.entity.js";
import { UpdateLessonsRepository } from "../model/repository/update.repository.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, { UpdateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UpdateLessonsUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const lessonsEntity = new LessonsEntity({
        title: document.title,
        video_link: document.video_link,
        description: document.description,
        updatedAt: new Date(),
      });

      const LessonsRepository = new UpdateLessonsRepository(this.db);
      await LessonsRepository.handle(id, objClean(lessonsEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }
}
