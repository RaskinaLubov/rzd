import {BaseModel} from './base-model';

export class Tab extends BaseModel {
  title: string;

  constructor(id, title) {
    super();
    this.id = id;
    this.title = title;
  }
}
