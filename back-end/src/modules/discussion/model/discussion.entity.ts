export interface DiscussionEntityInterface {
  _id?: string;
  course_id?: string;
  createdBy_id?: string;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class DiscussionEntity implements DiscussionEntityInterface {
  public _id?: string;
  public course_id?: string;
  public createdBy_id?: string;
  public comment?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(course: DiscussionEntityInterface) {
    this._id = course._id;
    this.course_id = course.course_id;
    this.createdBy_id = course.createdBy_id;
    this.comment = course.comment;
    this.createdAt = course.createdAt;
    this.updatedAt = course.updatedAt;
  }
}
