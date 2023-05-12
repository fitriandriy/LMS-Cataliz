export interface LessonsEntityInterface {
  _id?: string;
  title?: string;
  video_link?: string;
  description?: string;
  section_id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export class LessonsEntity implements LessonsEntityInterface {
  public _id?: string;
  public title?: string;
  public video_link?: string;
  public description?: string;
  public section_id?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(lessons: LessonsEntityInterface) {
    this._id = lessons._id;
    this.title = lessons.title;
    this.video_link = lessons.video_link;
    this.description = lessons.description;
    this.section_id = lessons.section_id;
    this.createdAt = lessons.createdAt;
    this.updatedAt = lessons.updatedAt;
  }
}
