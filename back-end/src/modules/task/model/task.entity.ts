export interface TaskEntityInterface {
  _id?: string;
  deadline?: Date;
  criteria?: object;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class TaskEntity implements TaskEntityInterface {
  public _id?: string;
  public deadline?: Date;
  public criteria?: object;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(task: TaskEntityInterface) {
    this._id = task._id;
    this.deadline = task.deadline;
    this.criteria = task.criteria;
    this.description = task.description;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}