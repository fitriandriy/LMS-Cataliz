import { objClean } from "@point-hub/express-utils";
import { UpdateTaskRepository } from "../model/repository/update.repository.js";
import { TaskEntity } from "../model/task.entity.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, { UpdateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UpdateTaskUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const taskEntity = new TaskEntity({
        name: document.name,
        deadline: document.deadline,
        criteria: document.criteria,
        description: document.description,
        updatedAt: new Date(),
      });

      const taskRepository = new UpdateTaskRepository(this.db);
      await taskRepository.handle(id, objClean(taskEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }

}
