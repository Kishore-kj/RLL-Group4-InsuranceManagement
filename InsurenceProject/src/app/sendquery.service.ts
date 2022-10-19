import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queries } from './queries.model';


@Injectable({
  providedIn: 'root'
})
export class SendqueryService {
  _url = 'http://localhost:9091/api/v1/query';
  constructor(private _http: HttpClient) { }

  putquery(quer:Queries){
    return this._http.post<any>(this._url,quer)
  }
}
