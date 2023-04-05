export enum UserRoleTypes {
  Facilitator = "facilitator",
  Student = "student",
}

export interface UserEntityInterface {
  _id?: string;
  username?: string;
  role?: UserRoleTypes;
  email?: string;
  password?: string;
  phone_number?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserEntity implements UserEntityInterface {
  public _id?: string;
  public username?: string;
  public role?: UserRoleTypes;
  public email?: string;
  public password?: string;
  public phone_number?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(user: UserEntityInterface) {
    this._id = user._id;
    this.username = user.username;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
    this.phone_number = user.phone_number;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
