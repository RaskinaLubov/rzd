import {
  Component, ContentChildren, Input, OnInit, QueryList
} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() selectedIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  selectTab(tab: TabComponent, index: number) {
    this.tabs.toArray().forEach((varTab) => {
      varTab.active = false;
    });

    this.selectedIndex = index;
    tab.active = true;
  }
}
