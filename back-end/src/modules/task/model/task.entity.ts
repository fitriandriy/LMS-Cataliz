export interface TaskEntityInterface {
  _id?: string;
  deadline?: Date;
  criteria?: CriteriaInterface[];
  name?: string;
  description?: string;
  section_id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CriteriaInterface {
  name: string;
  status: boolean;
}

export class TaskEntity implements TaskEntityInterface {
  public _id?: string;
  public deadline?: Date;
  public criteria?: CriteriaInterface[];
  public name?: string;
  public description?: string;
  public section_id?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(task: TaskEntityInterface) {
    this._id = task._id;
    this.deadline = task.deadline;
    this.criteria = task.criteria;
    this.name = task.name;
    this.description = task.description;
    this.section_id = task.section_id;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}
