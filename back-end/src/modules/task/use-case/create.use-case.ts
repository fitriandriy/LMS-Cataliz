import { TaskEntity } from "../model/task.entity.js";
import { CreateTaskRepository } from "../model/repository/create.repository.js";
import { validate } from "../validation/create.validation.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateTaskUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(document: DocumentInterface, options: CreateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // save to database
      const taskEntity = new TaskEntity({
        deadline: document.deadline,
        criteria: document.criteria,
        description: document.description,
        createdAt: new Date(),
      });

      const response = await new CreateTaskRepository(this.db).handle(taskEntity, options);

      return {
        acknowledged: response.acknowledged,
        _id: response._id,
      };
    } catch (error) {
      throw error;
    }
  }
}
