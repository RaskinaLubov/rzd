import {Injectable} from '@angular/core';
import {ItemService} from './item.service';
import {Observable} from 'rxjs/Observable';
import {eType, eValidatorTypes, ItemDto} from '../models/dto/ItemDto';
import {Item} from '../models/Item';

@Injectable()
export class ItemFacade {
  constructor(private itemService: ItemService) {
  }

  getItems(tabId: string): Observable<ItemDto[]> {
    return this.itemService.getItems(tabId).map(
      (items: Item[]) => {
        const itemDtos = items.map((item) => {
          let validators = null;
          if (item.validators) {
            validators = item.validators.map((val) => {
              return {type: eValidatorTypes[val.type], value: val.value}
            });
          }
          return new ItemDto(item.id, item.tabId, item.lable, eType[item.type], validators);
        });
        return itemDtos;
      }
    )
  }
}
