import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { authentication } from './login/authentication';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  constructor(private httpClient:HttpClient) {

  }
  loginstatus(
      userName : string,
      password : string
  ):Observable<authentication>{
      let body = {
          userName : userName,
          password : password,
      };
      let headers = new HttpHeaders({
          'content-type': 'application/json',
       });
       return this.httpClient.post<authentication>(
          'http://localhost:9091/api/v1/users',
        body,
        {
          headers: headers,
        }
       );
  }
}
