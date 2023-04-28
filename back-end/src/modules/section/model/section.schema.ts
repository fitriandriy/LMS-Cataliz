/**
 * MongoDB Schema
 *
 * https://www.mongodb.com/docs/v6.0/core/schema-validation/update-schema-validation/
 * https://www.mongodb.com/docs/drivers/node/current/fundamentals/indexes/
 * https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/
 */
import { IDatabaseAdapter } from "@src/database/connection.js";
import { MongoDBHelper } from "@src/database/mongodb/mongodb-helper.js";

export const collection = "sections";

export async function createCollection(db: IDatabaseAdapter) {
  try {
    const helper = new MongoDBHelper(db);

    if (!(await helper.isExists(collection))) {
      console.info(`[schema] ${collection} - create collection`);
      await db.createCollection(collection);
    }

    console.info(`[schema] ${collection} - update schema`);
    await db.updateSchema(collection, {
      bsonType: "object",
      required: ["title", "video_link", "description"],
      properties: {
        title: {
          bsonType: "string",
          description: "The title for the section",
        },
        video_link: {
          bsonType: "string",
          description: "The link video for the section",
        },
        description: {
          bsonType: "string",
          description: "The description for the section",
        },
      },
    });

    console.info(`[schema] ${collection} - create unique attribute ""`);
    await helper.createUnique(collection, "");
  } catch (error) {
    throw error;
  }
}

export async function dropCollection(db: IDatabaseAdapter) {
  try {
    const helper = new MongoDBHelper(db);

    if (await helper.isExists(collection)) {
      await db.dropCollection(collection);
      console.info(`[schema] drop ${collection} collection`);
    }
  } catch (error) {
    throw error;
  }
}
