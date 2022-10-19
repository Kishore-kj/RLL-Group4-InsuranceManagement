import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { policies } from './policies';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  _url = 'http://localhost:9091/api/v1/policy';

  constructor(private _http:HttpClient) { }

  addpolicy(addpolicies:policies){
      return  this._http.post<any>(this._url,addpolicies);
  }
}
