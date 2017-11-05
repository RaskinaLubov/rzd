import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ValueTabService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private valueUrl = 'api/value';

  constructor(private http: Http) {
  }

  create(data: any): Observable<any> {
    return this.http
      .post(this.valueUrl, JSON.stringify(data), {headers: this.headers})
      .map((res) => {
        return res.json().data;
      })
      .catch(this.handleError);
  }

  update(data: any): Observable<any> {
    const url = `${this.valueUrl}/${data.id}`;
    return this.http
      .put(url, JSON.stringify(data), {headers: this.headers})
      .map(() => data)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.of(error.message || error);
  }
}
