import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL="http://localhost:9091/api/v1/categories";

  constructor(private httpClient:HttpClient ) { }
  getInsuranceCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }

  addInsuranceCategory(category: Category): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, category);
  }
}
