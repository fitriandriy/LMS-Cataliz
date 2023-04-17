import { hashSync } from "bcrypt";
import { UserRoleTypes } from "./user.entity.js";
export const userSeed = [
  {
    username: "facil",
    email: "email@gmail.com",
    password: hashSync("password", 10),
    role: UserRoleTypes.Facilitator,
    createdAt: new Date(),
  },
  {
    username: "stud",
    email: "email@gmail.com",
    password: hashSync("password", 10),
    role: UserRoleTypes.Student,
    createdAt: new Date(),
  },
];
