import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import {InMemoryDataService} from './services/mock/in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TabService} from './services/tab.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    TabService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
