import { Injectable } from '@angular/core';
import { ProductResponse } from '../products/ProductResponse';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { BasketItem } from '../auth/basket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
    private auth: AuthService) { }



  create(order: OrderCreateRequest) {
    return this.http.post('/api/orders', order, this.auth.getAuthOptions())
  }

  ordersForLoggedUser(): Observable<Array<UserOrdersResponse>> {
    return this.http.get<Array<UserOrdersResponse>>('/api/orders', this.auth.getAuthOptions())
  }
}

export interface OrderCreateRequest {
  order: Order;
  data: OrderData;
}

export interface Order {
  products: Array<ProductDetails>;
  price: number;
}

export interface OrderData {
  name: string;
  city: string;
  address: string;
  cardNumber: string;
  expiration: string;
  security: string;
}

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}



interface UserOrderData {
  name: string;
  city: string;
  address: string;
}

export interface UserOrdersResponse {
  id: number;
  date: Date;
  price: number;
  data: UserOrderData;
  products: Array<ProductDetails>;
}