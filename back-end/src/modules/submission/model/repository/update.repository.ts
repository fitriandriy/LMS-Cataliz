import { CourseEntityInterface } from "../course.entity";
import DatabaseConnection, {
  DocumentInterface,
  RetrieveOptionsInterface,
  UpdateOptionsInterface,
  UpdateResultInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends CourseEntityInterface {
  _id: string;
}

export class UpdateCourseRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "courses");
  }

  public async handle(
    id: string,
    document: DocumentInterface,
    options?: UpdateOptionsInterface
  ): Promise<UpdateResultInterface> {
    return await this.databaseManager.update(id, document, options);
  }

  public async findByUserID(createdBy_id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: any = await this.databaseManager.retrieveAll(
      { fields: "", filter: { createdBy_id }, page: 1, pageSize: 1, sort: "asc" },
      options
    );

    return response.data[0];
  }
}
