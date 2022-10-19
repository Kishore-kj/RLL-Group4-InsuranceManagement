import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091/api/v1/policy/';

  public deletePolicy(id: any) {
    return this.http.delete(this.API + id);
  }
}
