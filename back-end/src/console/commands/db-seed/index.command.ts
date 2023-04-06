import { BaseCommand } from "@point-hub/express-cli";
import databaseConfig from "@src/config/database.js";
import DatabaseConnection from "@src/database/connection.js";
import MongoDbConnection from "@src/database/mongodb/connection-mongodb.js";

export default class DbSeedCommand extends BaseCommand {
  constructor() {
    super({
      name: "db:seed",
      description: "Seed database",
      summary: "Seed database",
      arguments: [],
      options: [],
    });
  }
  async handle(): Promise<void> {
    const dbConnection = new DatabaseConnection(
      new MongoDbConnection({
        name: databaseConfig[databaseConfig.default].name,
        url: databaseConfig[databaseConfig.default].url,
      })
    );
    dbConnection.database(databaseConfig[databaseConfig.default].name);
    try {
      await dbConnection.open();
      // seed examples colllection
      const { userSeed } = await import("@src/modules/user/model/user.seed.js");
      await dbConnection.collection("users").deleteAll();
      const userData = await dbConnection.collection("users").createMany(userSeed);
      console.info(`[seed] seeding examples data`, userData);
      const { coursesSeed } = await import("@src/modules/course/model/course.seed.js");
      await dbConnection.collection("courses").deleteAll();
      const courseData = await dbConnection.collection("courses").createMany(coursesSeed);
      console.info(`[seed] seeding examples data`, courseData);
    } catch (error) {
      console.error(error);
    } finally {
      dbConnection.close();
    }
  }
}
