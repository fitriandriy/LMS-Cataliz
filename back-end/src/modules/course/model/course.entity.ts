export interface CourseEntityInterface {
  _id?: string;
  theme?: string;
  title?: string;
  thumbnail?: string;
  createdBy_id?: string;
  description?: string;
  prerequisites?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CourseEntity implements CourseEntityInterface {
  public _id?: string;
  public theme?: string;
  public title?: string;
  public thumbnail?: string;
  public createdBy_id?: string;
  public description?: string;
  public prerequisites?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(course: CourseEntityInterface) {
    this._id = course._id;
    this.theme = course.theme;
    this.title = course.title;
    this.thumbnail = course.thumbnail;
    this.createdBy_id = course.createdBy_id;
    this.description = course.description;
    this.prerequisites = course.prerequisites;
    this.createdAt = course.createdAt;
    this.updatedAt = course.updatedAt;
  }
}
