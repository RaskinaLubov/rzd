import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tabs = [
      {id: 1, title: 'Основные данные'},
      {id: 2, title: 'Паспортные данные'},
      {id: 3, title: 'Личные данные'},
      {id: 4, title: 'Дополнительная инфомация'}
    ];
    const items = [
      {
        id: '1_1', tabId: '1', lable: 'Имя', type: 'text',
        validators: [{type: 'required'},
          {type: 'pattern', value: '[а-яА-ЯёЁa-zA-Z]+$'}
        ]
      },
      {
        id: '1_2', tabId: '1', lable: 'Фамилия', type: 'text',
        validators: [{type: 'required'},
          {type: 'pattern', value: '[а-яА-ЯёЁa-zA-Z]+$'}
        ]
      },
      {
        id: '1_3', tabId: '1', lable: 'Отчество', type: 'text',
        validators: [{type: 'pattern', value: '[а-яА-ЯёЁa-zA-Z]+$'}]
      },
      {
        id: '1_4', tabId: '1', lable: 'Дата рождения', type: 'date',
        validators: [{type: 'required'}]
      },
      {
        id: '1_5', tabId: '1', lable: 'Адрес', type: 'textarea',
      },
      {
        id: '1_6', tabId: '1', lable: 'Я даю согласие на обработку персональных данных', type: 'boolean',
        validators: [{type: 'requiredTrue'}]
      },

      {
        id: '2_1', tabId: '2', lable: 'Серия', type: 'text',
        validators: [
          {type: 'required'},
          {type: 'pattern', value: '\\d{4}'}
        ]
      },
      {
        id: '2_2', tabId: '2', lable: 'Номер', type: 'text',
        validators: [
          {type: 'required'},
          {type: 'pattern', value: '\\d{6}'}
        ]
      },
      {
        id: '2_3', tabId: '2', lable: 'Дата выдачи', type: 'date',
        validators: [{type: 'required'}]
      },
      {
        id: '2_4', tabId: '2', lable: 'Код подразделения', type: 'text',
        validators: [
          {type: 'required'},
          {type: 'pattern', value: '\\d{6}'}
        ]
      },
      {
        id: '2_5', tabId: '2', lable: 'Кем выдан', type: 'textarea',
        validators: [
          {type: 'required'}
        ]
      },
      {
        id: '3_1', tabId: '3', lable: 'Номер телефона', type: 'text',
        validators: [{type: 'pattern', value: '\\d{11}'}]
      },
      {
        id: '3_2', tabId: '3', lable: 'email', type: 'text',
        validators: [{type: 'pattern', value: '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'}]
      },
      {
        id: '4_1', tabId: '4', lable: 'Дополнительная информация', type: 'textarea',
      }

    ];
    const value = [{id: 1}];

    return {tabs, items, value};
  }
}
