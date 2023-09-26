import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket } from '../auth/basket';



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

    basket.products.push(product);
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
    const index = basket.products.indexOf(product)
    basket.products.splice(index, 1);

    basket.price = this.calculatePrice(basket.products)

    console.log(basket)
    this.Basket$.next(basket)
  }

  calculatePrice(products): number {
    if (products.length === 0) {
      return 0;
    }
    return products
      .map(p => p.price)
      .reduce((prev, current) => prev + current, 0)

  }
}
