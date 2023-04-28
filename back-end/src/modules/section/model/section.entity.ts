export interface SectionEntityInterface {
  _id?: string;
  deadline?: Date;
  course_id?: string;
  task_id?: string;
  title?: string;
  video_link?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export class SectionEntity implements SectionEntityInterface {
  public _id?: string;
  public deadline?: Date;
  public course_id?: string;
  public task_id?: string;
  public title?: string;
  public video_link?: string;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(section: SectionEntityInterface) {
    this._id = section._id;
    this.deadline = section.deadline;
    this.course_id = section.course_id;
    this.title = section.title;
    this.video_link = section.video_link;
    this.task_id = section.task_id;
    this.description = section.description;
    this.createdAt = section.createdAt;
    this.updatedAt = section.updatedAt;
  }
}
