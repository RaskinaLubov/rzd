import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TabService} from './tab.service';
import {Tab} from '../models/tab';
import {TabDto} from '../models/dto/TabDto';

@Injectable()
export class TabFacade {
  constructor(private tabService: TabService) {
  }

  getTabs(): Observable<TabDto[]> {
    return this.tabService.getTabs().map(
      (tabs: Tab[]) => {
        return tabs.map(tab => tab as TabDto);
      }
    )
  }
}
