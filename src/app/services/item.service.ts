import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Item} from '../models/Item';

@Injectable()
export class ItemService {

  private itemsUrl = 'api/items';

  constructor(private http: Http) { }

  getItems(tabId: string): Observable<Item[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('tabId', tabId);
    const options: RequestOptions = new RequestOptions({params: params});

    return this.http.get(this.itemsUrl, options).map(
      (response: Response) => {
        return response.json().data as Item[];
      }
    ).catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.of(error.message || error);
  }
}
