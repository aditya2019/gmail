import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class JsonApiService {

  constructor(private http: Http) { }

  getMails(){
    return this.http.get(AppConfig.apiUrl+'/mails')
    .map(data => data.json(),
      (error: any)=>this.handleError(error));
  }

  // Handle errors
  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}
