import { CourseEntityInterface } from "../course.entity";
import DatabaseConnection, {
  DeleteOptionsInterface,
  DeleteResultInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends CourseEntityInterface {
  _id: string;
}

export class DeleteCourseRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "courses");
  }

  public async handle(id: string, options?: DeleteOptionsInterface): Promise<DeleteResultInterface> {
    return await this.databaseManager.delete(id, options);
  }

  public async findByUserID(createdBy_id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: any = await this.databaseManager.retrieveAll(
      { fields: "", filter: { createdBy_id }, page: 1, pageSize: 1, sort: "asc" },
      options
    );

    return response.data[0];
  }
}
