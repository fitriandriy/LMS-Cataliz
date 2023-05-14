export interface SubmissionEntityInterface {
  _id?: string;
  student_note?: string;
  file?: string;
  createdBy_id?: string;
  task_id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SubmissionEntity implements SubmissionEntityInterface {
  public _id?: string;
  public student_note?: string;
  public file?: string;
  public createdBy_id?: string;
  public task_id?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(submission: SubmissionEntityInterface) {
    this._id = submission._id;
    this.student_note = submission.student_note;
    this.file = submission.file;
    this.createdBy_id = submission.createdBy_id;
    this.task_id = submission.task_id;
    this.createdAt = submission.createdAt;
    this.updatedAt = submission.updatedAt;
  }
}
