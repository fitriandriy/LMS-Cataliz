import { UserEntityInterface } from "../user.entity.js";
import DatabaseConnection, {
  CreateOptionsInterface,
  CreateResultInterface,
  DocumentInterface,
  RetrieveOptionsInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends UserEntityInterface {
  _id: string;
}

export class AuthUserRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "users");
  }

  public async register(document: DocumentInterface, options?: CreateOptionsInterface): Promise<CreateResultInterface> {
    return await this.databaseManager.create(document, options);
  }

  public async findByUsername(username: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: any = await this.databaseManager.retrieveAll(
      { fields: "", filter: { username }, page: 1, pageSize: 1, sort: "asc" },
      options
    );

    return response.data[0];
  }

  public async findByEmail(email: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: any = await this.databaseManager.retrieveAll(
      { fields: "", filter: { email }, page: 1, pageSize: 1, sort: "asc" },
      options
    );

    return response.data[0];
  }
}
