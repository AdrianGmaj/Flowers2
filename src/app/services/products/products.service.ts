import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './ProductResponse';
import { ProductPost } from './ProductPost';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<ProductResponse>> {
    return this.http.get<Array<any>>('/api/products')
  }
  addProduct(value: ProductPost) {
    return this.http.post<ProductResponse>('api/products', value)
  }

  deleteProduct(id): Observable<ProductResponse> {
    return this.http.delete<ProductResponse>(`/api/products/${id}`)
  }

  getProductById(id: string) {
    return this.http.get<ProductResponse>(`/api/products/${id}`)
  }

  editProduct(id: number, value: ProductPost): Observable<ProductResponse> {
    return this.http.patch<ProductResponse>(`/api/products/${id}`, value)
  }
}
