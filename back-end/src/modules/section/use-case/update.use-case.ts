import { objClean } from "@point-hub/express-utils";
import { UpdateSectionRepository } from "../model/repository/update.repository.js";
import { SectionEntity } from "../model/section.entity.js";
import { validate } from "../validation/update.validation.js";
import DatabaseConnection, { UpdateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UpdateSectionUseCase {
  private db: DatabaseConnection;

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  public async handle(id: string, document: DocumentInterface, options: UpdateOptionsInterface) {
    try {
      // validate request body
      validate(document);

      // update database
      const sectionEntity = new SectionEntity({
        section_title: document.section_title,
        description: document.description,
        updatedAt: new Date(),
      });

      const sectionRepository = new UpdateSectionRepository(this.db);
      await sectionRepository.handle(id, objClean(sectionEntity), options);

      return {};
    } catch (error) {
      throw error;
    }
  }

}
