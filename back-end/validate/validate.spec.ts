import { isEmailValid } from "./validate.ts";

describe("validate email", () => {
  it("email yang tidak ada symbol @ maka return false", async () => {
    const isValid = isEmailValid("johndoegmail.com");
    expect(isValid).toStrictEqual(false);
  });
  it("email harus symbol dot setelah @, jika tidak maka return false", async () => {
    const isValid = isEmailValid("johndoe@gmailcom");
    expect(isValid).toStrictEqual(false);
  });
  it("should return true if email has @ and .", async () => {
    const isValid = isEmailValid("johndoe@gmail.com");
    expect(isValid).toStrictEqual(true);
  });
});
