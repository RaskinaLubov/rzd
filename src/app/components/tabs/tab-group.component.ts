import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @Input() selectedIndex = 0;
  @Input() switchNextTab: Function;

  constructor() {
  }

  ngOnInit() {
  }

  selectTab(tab: TabComponent, index: number) {
    if (!tab.disabled && this.selectedIndex != index) {
      this.tabs.toArray().forEach((varTab) => {
        varTab.active = false;
      });

      if (this.selectedIndex + 1 == index && this.switchNextTab) {
        this.switchNextTab();
      }
      this.selectedIndex = index;
      tab.active = true;
    }
  }
}
