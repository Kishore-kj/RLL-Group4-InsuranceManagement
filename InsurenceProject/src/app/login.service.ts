import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationStatus } from "./AuthenticationStatus.model"; 


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  authenticated(
      userName: string,
      password: string
  ): Observable<AuthenticationStatus> {
      let body = {
          userName: userName,
          password: password,
      };
      let headers = new HttpHeaders({
          'content-type': 'application/json',
      });
      return this.httpClient.post<AuthenticationStatus>(
          'http://localhost:9091/api/v1/login',
          body,
          {
              headers: headers,
          }
      );
  }
}