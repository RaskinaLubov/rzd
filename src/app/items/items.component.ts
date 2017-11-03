import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {eValidatorsType, ItemDto, ValidatorsItem, eType} from '../models/dto/ItemDto';
import {ItemFacade} from '../services/item.facade';

@Component({
  selector: 'app-items-component',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  static PATTERN_DATE = '(((19|20)([2468][048]|[13579][26]|0[48])|2000)[-]02[-]29|((19|20)[0-9]{2}[-](0[4678]|1[02])[-](0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}[-](0[1359]|11)[-](0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}[-]02[-](0[1-9]|1[0-9]|2[0-8])))';

  get patternDate(){
    return ItemsComponent.PATTERN_DATE
  }
  eType = eType;

  @Input() tabId: string;

  items: ItemDto[] = [];

  tabForm: FormGroup;

  formErrors: any = {};

  @Input() enableNextTab: Function;
  @Input() disableAllNextTabs: Function;


  validationMessages = {
    [eValidatorsType[eValidatorsType.required]]: 'Обязательное поле.',
    [eValidatorsType[eValidatorsType.minlength]]: 'Значение должно быть не менее minlength символов.',
    [eValidatorsType[eValidatorsType.maxlength]]: 'Значение не должно быть больше  maxlength символов.',
    [eValidatorsType[eValidatorsType.min]]: 'Значение должно быть не меньше min.',
    [eValidatorsType[eValidatorsType.max]]: 'Значение не должно быть больше max.',
    [eValidatorsType[eValidatorsType.pattern]]: 'Значение не соответствует указаннаму шаблону.',
  };

  constructor(private fb: FormBuilder,
              private itemFacade: ItemFacade) {
  }

  ngOnInit() {
    this.itemFacade.getItems(this.tabId).subscribe(
      (items) => {
        this.items = items;
        this.createFormControl();
      }
    );
  }

  createFormControl() {
    const optionsFormGroup = {};

    this.items.forEach((item) => {
      // TODO ??
      this.formErrors[item.id] = '';

      const validatorsForm: any[] = [];
      item.validators.forEach(
        (valid: ValidatorsItem) => {
          switch (valid.type) {
            case eValidatorsType.required:
              validatorsForm.push(Validators.required);
              break;
            case eValidatorsType.requiredTrue:
              validatorsForm.push(Validators.requiredTrue);
              break;
            case eValidatorsType.max:
              if (item.type == eType.number && +valid.value) {
                validatorsForm.push(Validators.max(+valid.value));
              }
              if ((item.type == eType.text || item.type == eType.textarea) && +valid.value) {
                validatorsForm.push(Validators.maxLength(+valid.value));
              }
              break;
            case eValidatorsType.maxlength:
              validatorsForm.push(Validators.maxLength(+valid.value));
              break;
            case eValidatorsType.min:
              validatorsForm.push(Validators.min(+valid.value));
              // if (item.type == eType.number && +valid.value) {
              //   validatorsForm.push(Validators.min(+valid.value));
              // }
              // if ((item.type == eType.text || item.type == eType.textarea) && +valid.value) {
              //   validatorsForm.push(Validators.minLength(+valid.value));
              // }
              break;
            case eValidatorsType.minlength:
              validatorsForm.push(Validators.minLength(+valid.value));
              break;
            case eValidatorsType.pattern:
              validatorsForm.push(Validators.pattern(valid.value));
              break;
          }
        }
      );
      optionsFormGroup[item.id] = new FormControl('', validatorsForm);

    });

    this.tabForm = this.fb.group(optionsFormGroup);

    this.tabForm.valueChanges.subscribe(
      (data) => {
        this.onValueChange(data);
      });
    this.onValueChange();
  }

  onValueChange(data?) {
    if (!this.tabForm) {
      return;
    }
    const form = this.tabForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          let messErrors;
          switch (key) {
            case eValidatorsType[eValidatorsType.maxlength]:
            case eValidatorsType[eValidatorsType.minlength]:
              messErrors = this.validationMessages[key].replace(key, control.errors[key].requiredLength);
              break;
            case eValidatorsType[eValidatorsType.max]:
            case eValidatorsType[eValidatorsType.min]:
              messErrors = this.validationMessages[key].replace(key, control.errors[key][key]);
              break;
            default:
              messErrors = this.validationMessages[key];
              break;
          }
          this.formErrors[field] += messErrors ? messErrors : '' + '\n ';
        }
      }
    }

    if (form.dirty && form.valid) {
      this.enableNextTab();
    } else {
      this.disableAllNextTabs();
    }

  }

  onSubmit(data?) {

    console.log('onSubmit - ' + data);
    console.log('onSubmit - ' + this.tabForm.value);
  }

  ngOnDistroy() {
    console.log('ngOnDistroy')
  }
}
