import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteapprovalService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091/api/v1/approvals/';

  public deleteapproval(id: String) {
    return this.http.delete(this.API + id);
  }
}
