import { ApiError } from "@point-hub/express-error-handler";
import Validatorjs from "validatorjs";
import { DocumentInterface } from "@src/database/connection.js";

// https://github.com/mikeerickson/validatorjs
export const validate = (documents: Array<DocumentInterface>) => {
  try {
    const courses = {
      course: [...documents],
    };
    const validation = new Validatorjs(courses, {
      "course.*.title": "required",
      "course.*.description": "required",
      "course.*.prerequisites": "required",
    });
    if (validation.fails()) {
      throw new ApiError(422, validation.errors.errors);
    }
  } catch (error) {
    throw error;
  }
};
