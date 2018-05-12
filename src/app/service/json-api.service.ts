import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig }from '../config/config.constant';

@Injectable()
export class JsonApiService {

  private headers = new Headers({ 'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getMails(){
    return this.http.get(AppConfig.apiUrl+'/mails')
    .map(data => data.json(),
      (error: any)=>this.handleError(error));
  }

// delete by id
  deleteMail(mailId){
    return this.http.delete(AppConfig.apiUrl+'/mails/'+mailId, {headers: this.headers})
    .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

   // getMails(){
   //     return this.http.get(AppConfig.apiUrl+'/mails', {headers: this.headers})
   //     .map(data => data.json(),
   //    (error: any)=>this.handleError(error));
   //    }
  // Handle err

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}
