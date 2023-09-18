import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoryResponse } from './categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Array<CategoryResponse>> {
    return this.http.get<Array<CategoryResponse>>('/api/categories')
  }

  getCategoryById(id: string): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`api/categories/${id}`)
  }
}
