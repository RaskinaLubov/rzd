import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import {InMemoryDataService} from './services/mock/in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TabService} from './services/tab.service';
import {HttpModule} from '@angular/http';
import {TabFacade} from './services/tab.facade';
import {ItemsComponent} from './items/items.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemService} from './services/item.service';
import {ItemFacade} from './services/item.facade';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    TabService,
    TabFacade,
    ItemService,
    ItemFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
