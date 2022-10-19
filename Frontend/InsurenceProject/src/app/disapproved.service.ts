import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disapprovals } from './customers/Disapproved';

@Injectable({
  providedIn: 'root'
})
export class DisapprovedService {

  _url = 'http://localhost:9091/api/v1/disapproved';
  constructor(private _http: HttpClient) { }
  disapproved(disapproved:Disapprovals){
    console.log(disapproved);
    return this._http.post<any>(this._url, disapproved)
 }
}
