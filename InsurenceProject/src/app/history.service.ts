import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091/api/v1/approved/';

  public getdetails(id: any) {
    return this.http.delete(this.API + id);
  }
}
