import {BaseModel} from '../base-model';

export interface ValidatorsItem {
  type: eValidatorsType,
  value: string
}

export class ItemDto extends BaseModel {
  tabId: string;
  lable: string;
  type: eType;
  value: any;
  validators: ValidatorsItem[] = [];


  constructor(id: string, tabId: string, lable: string, type: eType, validators?: ValidatorsItem[]) {
    super();
    this.id = id;
    this.tabId = tabId;
    this.lable = lable;
    this.type = type;
    if (validators) {
      this.validators = validators;
    }
  }

}

export enum eType {
  number,
  text,
  textarea,
  boolean,
  date
}

export enum eValidatorsType {
  required,
  min,
  minlength,
  max,
  maxlength,
  pattern,
  requiredTrue
}
