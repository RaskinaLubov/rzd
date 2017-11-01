/**
 * Extend all models from this base model in order to have ability to extends models centralized
 */
export class BaseModel {

  id: string;

  constructor() {
    if (new.target === BaseModel) {
      throw new Error(`You shouldn't instantiate a base class. Extend it instead`);
    }
  }

  /*/!**
   * Serialize a model
   * @returns {string}
   *!/
  toJson() {
    return JSON.stringify(this);
  }*/
}
