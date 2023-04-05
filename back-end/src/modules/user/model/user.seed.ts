import {  UserRoleTypes } from "./user.entity.js";

export const userSeed = [
  {
    username: "Example Name 1",
    email: "email@gmail.com",
    password: "password",
    role: UserRoleTypes.Facilitator,
    createdAt: new Date(),
  },
  {
    username: "Example Name 2",
    email: "email@gmail.com",
    password: "password",
    role: UserRoleTypes.Student,
    createdAt: new Date(),
  },
  {
    username: "Example Name 3",
    email: "email@gmail.com",
    password: "password",
    role: UserRoleTypes.Facilitator,
    createdAt: new Date(),
  },
];
