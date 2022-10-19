import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { registration } from "./registration.model";

@Injectable()
export class user_sinupService{
    constructor(private httpClient:HttpClient) {}
    user_sinup(
      userid:string,
    userName:string,
    mobile:string,
    password:string,
    email:string,
    ):Observable<registration>{
        let body = {
             userid:userid,
            userName : userName,
            mobile : mobile,
            password : password,
            email : email,
        };
        let headers = new HttpHeaders({
            'content-type': 'application/json',
        });
        return this.httpClient.post<registration>(
            'http://localhost:9091/api/v1/user',
            body,
            {
              headers: headers,
            }
        );
    }
}
