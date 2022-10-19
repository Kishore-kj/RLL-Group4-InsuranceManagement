import { Injectable } from '@angular/core';
import { Approvals } from './Approvals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {
  _url = 'http://localhost:9091/api/v1/approvals';
  constructor(private _http: HttpClient) { }
  apply(approvals:Approvals){
    console.log(approvals);
    return this._http.post<any>(this._url, approvals)
 }
}
