import {BaseModel} from './base-model';

export class Item extends BaseModel {
  tabId: string;
  lable: string;
  type: string;
  value: any;
  validators: {type, value}[]
}
