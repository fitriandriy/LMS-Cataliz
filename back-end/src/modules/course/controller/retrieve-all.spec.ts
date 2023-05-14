import { isValid } from "date-fns";
import request from "supertest";
import CourseFactory from "../model/course.factory";
import { createApp } from "@src/app.js";
import { resetDatabase, retrieveAll } from "@src/test/utils.js";

describe("retrieve all courses", () => {
  beforeEach(async () => {
    await resetDatabase();
  });
  it("should be able to retrieve all courses", async () => {
    const app = await createApp();

    const masterFactory = new CourseFactory();
    const masterData = await masterFactory.createMany(3);

    const courseFactory = new CourseFactory();
    await courseFactory.createMany(3);
    courseFactory.sequence([
      {
        createdBy_id: masterData.insertedIds[0],
      },
      {
        createdBy_id: masterData.insertedIds[1],
      },
      {
        createdBy_id: masterData.insertedIds[2],
      },
    ]);

    const data = await retrieveAll("courses")

    const response = await request(app).get(`/courses`);

    // expect http response
    expect(response.statusCode).toEqual(200);

    // expect response json
    expect(response.body.courses.length).toStrictEqual(3);
    expect(response.body.courses[0]._id).toBeDefined();
    expect(response.body.courses[0].title).toStrictEqual(data[0].title);
    expect(response.body.courses[0].description).toStrictEqual(data[0].description);
    expect(response.body.courses[0].prerequisites).toStrictEqual(data[0].prerequisites);
    expect(response.body.courses[0].theme).toStrictEqual(data[0].theme);
    expect(response.body.courses[0].prerequisites).toStrictEqual(data[0].prerequisites);
    expect(isValid(new Date(response.body.courses[0].createdAt))).toBeTruthy();

    expect(response.body.courses[1].title).toStrictEqual(data[1].title);
    expect(response.body.courses[2].description).toStrictEqual(data[2].description);
    expect(response.body.courses[3].prerequisites).toStrictEqual(data[3].prerequisites);
    expect(response.body.courses[4].theme).toStrictEqual(data[4].theme);

    expect(response.body.pagination.page).toStrictEqual(1);
    expect(response.body.pagination.pageSize).toStrictEqual(10);
    expect(response.body.pagination.pageCount).toStrictEqual(1);
    expect(response.body.pagination.totalDocument).toStrictEqual(3);
  });
});
