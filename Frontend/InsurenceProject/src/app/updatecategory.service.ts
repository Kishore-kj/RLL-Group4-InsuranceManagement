import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatecategoryService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091/api/v1/category/';

  public updateCategory(string: any) {
    return this.http.delete(this.API + string);
  }
}
