export interface SubmissionEntityInterface {
  _id?: string;
  file?: string;
  student_note?: string;
  createdBy_id?: string;
  task_id?: string;
  report?: {
    acceptance_status: boolean;
    criteria: CriteriaInterface[];
    reviewer_note: string;
    grade: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CriteriaInterface {
  name: string;
  status: boolean;
}

export class SubmissionEntity implements SubmissionEntityInterface {
  public _id?: string;
  public file?: string;
  public student_note?: string;
  public createdBy_id?: string;
  public task_id?: string;
  public report?: {
    acceptance_status: boolean;
    criteria: CriteriaInterface[];
    reviewer_note: string;
    grade: number;
  };
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(submission: SubmissionEntityInterface) {
    this._id = submission._id;
    this.file = submission.file;
    this.student_note = submission.student_note;
    this.createdBy_id = submission.createdBy_id;
    this.task_id = submission.task_id;
    this.report = submission.report;
    this.createdAt = submission.createdAt;
    this.updatedAt = submission.updatedAt;
  }
}
