import {Component, OnInit} from '@angular/core';
import './rx-js.operators';
import {TabService} from './services/tab.service';
import {TabDto} from './models/dto/TabDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // TODO ограничение длины от 3 до 7
  // @Length(3, 7)
  tabs: TabDto[] = [];

  constructor(private tabService: TabService) {
  }

  ngOnInit() {
    this.tabService.getTabs().subscribe(
      (tabs) => {
        const tabDtos = tabs.map(tab => tab as TabDto);
        if (tabDtos.length > 0) {
          tabDtos[0].disabled = false;
        }
        this.tabs = tabDtos;
      });
  }



}
