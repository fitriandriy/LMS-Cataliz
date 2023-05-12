export interface SectionEntityInterface {
  _id?: string;
  course_id?: string;
  task_id?: string;
  section_title?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export class SectionEntity implements SectionEntityInterface {
  public _id?: string;
  public course_id?: string;
  public task_id?: string;
  public section_title?: string;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(section: SectionEntityInterface) {
    this._id = section._id;
    this.course_id = section.course_id;
    this.section_title = section.section_title;
    this.task_id = section.task_id;
    this.description = section.description;
    this.createdAt = section.createdAt;
    this.updatedAt = section.updatedAt;
  }
}
