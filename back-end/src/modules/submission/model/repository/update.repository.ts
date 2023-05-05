import { SubmissionEntityInterface } from "../submission.entity";
import DatabaseConnection, {
  DocumentInterface,
  RetrieveOptionsInterface,
  UpdateOptionsInterface,
  UpdateResultInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends SubmissionEntityInterface {
  _id: string;
}

export class UpdateSubmissionRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "submissions");
  }

  public async handle(
    id: string,
    document: DocumentInterface,
    options?: UpdateOptionsInterface
  ): Promise<UpdateResultInterface> {
    return await this.databaseManager.update(id, document, options);
  }

  public async findCreatedById(id: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: SubmissionEntityInterface = await this.databaseManager.retrieve(id, options);

    return {
      _id: response._id as string,
      ...response,
    };
  }
}
