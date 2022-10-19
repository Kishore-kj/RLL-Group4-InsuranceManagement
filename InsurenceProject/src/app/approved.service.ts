import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApprovedModel } from 'src/approvedModel';

@Injectable({
  providedIn: 'root'
})
export class ApprovedService {
  _url = 'http://localhost:9091/api/v1/approved';
  constructor(private _http: HttpClient) { }
  approved(approved:ApprovedModel){
    console.log(approved);
    return this._http.post<any>(this._url, approved)
 }
}
