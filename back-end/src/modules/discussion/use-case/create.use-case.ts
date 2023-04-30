import { DiscussionEntity } from "../model/discussion.entity.js";
import { CreateDiscussionRepository } from "../model/repository/create.repository.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateDiscussionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const discussionEntity = new DiscussionEntity({
        course_id: document.course_id,
        createdBy_id: document.userId,
        comment: document.comment,
        createdAt: new Date(),
      });

      const response = await new CreateDiscussionRepository(this.db).handle(discussionEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
