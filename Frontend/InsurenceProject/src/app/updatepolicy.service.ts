import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { policies } from './policies';

@Injectable({
  providedIn: 'root'
})
export class UpdatepolicyService {

  _url = 'http://localhost:9091/api/v1/policy';
  constructor(private _http: HttpClient) {}
    enroll(update:policies){
      return this._http.post<any>(this._url, update)
   }
}
