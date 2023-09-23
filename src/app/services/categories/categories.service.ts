import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CategoryResponse } from './categoryResponse';
import { CategoryPost } from './CategoryPost';

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

  addCategory(value: CategoryPost): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>('api/categories', value)
  }
}
