export interface CourseEntityInterface {
  _id?: string;
  title?: string;
  thumbnail?: string;
  createdBy_id?: string;
  description?: string;
  prerequisites?: string;
  section?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class CourseEntity implements CourseEntityInterface {
  public _id?: string;
  public title?: string;
  public thumbnail?: string;
  public createdBy_id?: string;
  public description?: string;
  public prerequisites?: string;
  public section?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(course: CourseEntityInterface) {
    this._id = course._id;
    this.title = course.title;
    this.thumbnail = course.thumbnail;
    this.createdBy_id = course.createdBy_id;
    this.description = course.description;
    this.prerequisites = course.prerequisites;
    this.section = course.section;
    this.createdAt = course.createdAt;
    this.updatedAt = course.updatedAt;
  }
}
