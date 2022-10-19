import { Injectable } from '@angular/core';
import { updateModel } from './updateModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
    
  _url = 'http://localhost:9091/api/v1/user';
  constructor(private _http: HttpClient) {}
    enroll(update:updateModel){
      return this._http.post<any>(this._url, update)
   }
   
}
