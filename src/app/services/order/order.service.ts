import { Injectable } from '@angular/core';
import { ProductResponse } from '../products/ProductResponse';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { BasketItem } from '../auth/basket';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
    private auth: AuthService) { }



  create(order: OrderCreateRequest) {
    return this.http.post('/api/orders', order, this.auth.getAuthOptions())
  }

  ordersForLoggedUser(){
    return this.http.get('/api/orders', this.auth.getAuthOptions())
  }
}

 export interface OrderCreateRequest {
  order: Order;
  data: OrderData;
}

 export interface Order {
  products: Array<BasketItem>;
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