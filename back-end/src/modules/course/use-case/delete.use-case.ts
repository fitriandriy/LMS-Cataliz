import { DeleteCourseRepository } from "../model/repository/delete.repository.js";
import DatabaseConnection, { DeleteOptionsInterface, RetrieveOptionsInterface } from "@src/database/connection.js";

export class DeleteCourseUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, options: DeleteOptionsInterface) {
    try {
      const response = await new DeleteCourseRepository(this.db).handle(id, options);

      return {
        acknowledged: response.acknowledged,
        deletedCount: response.deletedCount,
      };
    } catch (error) {
      throw error;
    }
  }

  public async findByUserId(userId: string, options?: RetrieveOptionsInterface): Promise<any> {
    try {
      const response = await new DeleteCourseRepository(this.db).findByUserID(userId, options);
      if (typeof response == "undefined") {
        return Error("Not found");
      }
      return response;
    } catch (error) {
      throw error;
    }
  }
}
