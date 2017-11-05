import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ValueTabService} from './value-tab.service';

@Injectable()
export class ValueTabFacade {
  constructor(private valueTabService: ValueTabService) {
  }

  save(data): Observable<any> {
    let observable: Observable<any>;

    if (data.id) {
      observable = this.valueTabService.update(data);
    } else {
      observable = this.valueTabService.create(data);
    }
    return observable;
  }
}
