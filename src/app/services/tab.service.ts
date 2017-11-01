import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Tab} from '../models/Tab';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TabService {

  private tabsUrl = 'api/tabs';

  constructor(private http: Http) { }

  getTabs(): Observable<Tab[]> {

    return this.http.get(this.tabsUrl).map(
      (response: Response) => {
        return response.json().data as Tab[];
      }
    ).catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.of(error.message || error);
  }
}
