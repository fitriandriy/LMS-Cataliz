import { faker } from "@faker-js/faker";
import Factory from "@point-hub/express-factory";
import { CourseEntityInterface } from "./course.entity.js";
import { CreateManyCourseRepository } from "./repository/create-many.repository.js";
import { CreateCourseRepository } from "./repository/create.repository.js";
import { db } from "@src/database/database.js";

export default class CourseFactory extends Factory<CourseEntityInterface> {
  definition() {
    return {
      title: faker.word.adjective(2),
      description: faker.word.adjective(2),
      prerequisites: faker.word.adjective(2),
      theme: faker.word.adjective(2),
      thumbnail: faker.image.cats(),
      createdAt: new Date(),
    };
  }

  async create() {
    const courseRepository = new CreateCourseRepository(db);
    return await courseRepository.handle(this.makeOne());
  }

  async createMany(count: number) {
    const courseRepository = new CreateManyCourseRepository(db);
    return await courseRepository.handle(this.makeMany(count));
  }
}
