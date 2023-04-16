import { objClean } from "@point-hub/express-utils";
import { DiscussionEntity } from "../model/discussion.entity.js";
import { UpdateDiscussionRepository } from "../model/repository/update.repository.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, { UpdateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UpdateDiscussionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const discussionEntity = new DiscussionEntity({
        comment: document.comment,
        course_id: document.course_id,
        createdBy_id: document.userId,
        updatedAt: new Date(),
      });

      const discussionRepository = new UpdateDiscussionRepository(this.db);
      await discussionRepository.handle(id, objClean(discussionEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }
}
