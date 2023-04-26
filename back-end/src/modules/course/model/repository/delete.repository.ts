import { CourseEntityInterface } from "../course.entity";
import DatabaseConnection, {
  DeleteOptionsInterface,
  DeleteResultInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends CourseEntityInterface {
  [x: string]: any;
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

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: CourseEntityInterface = await this.databaseManager.retrieve(id, options);

    return {
      _id: response._id as string,
      ...response,
    };
  }
}
