import {Component, OnInit} from '@angular/core';
import './rx-js.operators';
import {TabDto} from './models/dto/TabDto';
import {TabFacade} from './services/tab.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // TODO ограничение длины от 3 до 7
  // @Length(3, 7)
  tabs: TabDto[] = [];

  public selectedTab = 0;


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

  enableNextTab = (): void => {
    // if (this.tabs.length > this.tabGroup.selectedIndex + 1) {
    //   this.tabs[this.tabGroup.selectedIndex + 1].disabled = false;
    // }
  }

  disableAllNextTabs = (): void => {
    // this.tabs.forEach(
    //   (tab, index) => {
    //     if (index > this.tabGroup.selectedIndex) {
    //       tab.disabled = true;
    //     }
    //   }
    // )
  }




}
