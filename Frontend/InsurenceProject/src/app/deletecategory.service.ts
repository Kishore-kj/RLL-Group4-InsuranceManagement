import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeletecategoryService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9091/api/v1/category/';

  public deleteCategory(id: any) {
    return this.http.delete(this.API + id);
  }
}
