import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket, BasketItem } from '../auth/basket';


interface ProductResponse {
  id: number,
  categoryId: number,
  price: number,
  name: string,
  thumbnail: string,
  image: string,
  active: boolean,
  description: string
}


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private Basket$: BehaviorSubject<Basket> = new BehaviorSubject<Basket>(
    { products: [], price: 0 }
  )
  constructor() { }

  // zwracamy basket$ z metodą asObservable, żeby nie można było użyć 
  // na niej metody next jak w typie Subject
  getBasket(): Observable<Basket> {
    return this.Basket$.asObservable();
  }

  // używamy metody next, abu zakomunikować do subskrybentów
  // że dodaliśmy nową wartość do naszego BehaviorSubjecta
  addProduct(product: ProductResponse) {
    const basket = this.Basket$.getValue();

    const productInBasket: BasketItem = basket.products.find(item => item.product.id === product.id);

    if (productInBasket) {
      productInBasket.count++;
    } else {
      basket.products.push({
        product: product,
        count: 1
      });

    }

    basket.price = this.calculatePrice(basket.products)

    this.Basket$.next(basket)
  }

  cleanBasket() {
    this.Basket$.next(
      { products: [], price: 0 }
    )
  }

  deleteProduct(product: ProductResponse) {
    const basket = this.Basket$.getValue();
    const index = basket.products.findIndex((item) => {
      product.id === item.product.id
    })
    basket.products.splice(index, 1);

    basket.price = this.calculatePrice(basket.products);

    console.log(basket)
    this.Basket$.next(basket);
  }

  addCount(productId: number): void {
    const basket = this.Basket$.getValue();

    const basketItem: BasketItem = basket.products.find(item => item.product.id === productId);

    if (basketItem) {
      basketItem.count += 1;
    }

    basket.price = this.calculatePrice(basket.products);
    this.Basket$.next(basket);
  }


  removeCount(productId: number): void {
    const basket = this.Basket$.getValue();

    const basketItem: BasketItem = basket.products.find(item => item.product.id === productId);

    if (basketItem) {
      if (basketItem.count > 1) {
        basketItem.count -= 1;
      }
    }

    basket.price = this.calculatePrice(basket.products);
    this.Basket$.next(basket);
  }


  calculatePrice(products: Array<BasketItem>): number {
    if (products.length === 0) {
      return 0;
    }
    return products
      .map(item => item.product.price * item.count)
      .reduce((prev, current) => prev + current, 0)
  }
}
