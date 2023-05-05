import { SubmissionEntityInterface } from "../submission.entity";
import DatabaseConnection, {
  DeleteOptionsInterface,
  DeleteResultInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends SubmissionEntityInterface {
  [x: string]: any;
  _id: string;
}

export class DeleteSubmissionRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "submissions");
  }

  public async handle(id: string, options?: DeleteOptionsInterface): Promise<DeleteResultInterface> {
    return await this.databaseManager.delete(id, options);
  }

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: SubmissionEntityInterface = await this.databaseManager.retrieve(id, options);
    console.log(response);
    return {
      _id: response._id as string,
      ...response,
    };
  }
}
