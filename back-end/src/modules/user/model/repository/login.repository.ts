import { UserEntityInterface } from "../user.entity.js";
import DatabaseConnection, { RetrieveOptionsInterface } from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

interface ResponseInterface extends UserEntityInterface {
  _id: string;
}

export class LoginUserRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "users");
  }

  public async findByUsername(username: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: UserEntityInterface = await this.databaseManager.retrieve(username, options);

    return {
      _id: response._id as string,
      ...response,
    };
  }

  public async findByEmail(email: string, options?: RetrieveOptionsInterface): Promise<ResponseInterface> {
    const response: UserEntityInterface = await this.databaseManager.retrieve(email, options);

    return {
      _id: response._id as string,
      ...response,
    };
  }
}
