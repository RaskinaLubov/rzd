import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import './rx-js.operators';
import {TabDto} from './models/dto/TabDto';
import {TabFacade} from './services/tab.facade';
import {ItemsComponent} from './items/items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tabs: TabDto[] = [];

  @ViewChild('tabGroup') tabGroup;

  @ViewChildren(ItemsComponent)
  items: QueryList<ItemsComponent>;

  constructor(private tabFacade: TabFacade) {
  }

  ngOnInit() {
    this.tabFacade.getTabs().subscribe(
      (tabDtos: TabDto[]) => {
        if (tabDtos.length > 0) {
          tabDtos[0].disabled = false;
          tabDtos[0].active = true;
        }
        this.tabs = tabDtos;
      });
  }

  switchNextTab = (): void => {
    const item = this.items.find((it, i) => {
      return i == this.tabGroup.selectedIndex
    });
    item.onSubmit(this.tabs[this.tabGroup.selectedIndex].id);
  };

  enableNextTab = (): void => {
    if (this.tabs.length > this.tabGroup.selectedIndex + 1) {
      this.tabs[this.tabGroup.selectedIndex + 1].disabled = false;
    }
  };

  disableAllNextTabs = (): void => {
    this.tabs.forEach(
      (tab, index) => {
        if (index > this.tabGroup.selectedIndex) {
          tab.disabled = true;
        }
      }
    )
  }


}
