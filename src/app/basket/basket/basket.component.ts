import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ProductResponse } from 'src/app/services/products/ProductResponse';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket
  basketPrice

  displayedColumns: string[] = [
    'price',
    'name',
    'thumbnail',
    "actions"
  ];

  constructor(private basketService: BasketService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.basketService.getBasket().subscribe(response => {
      // mat-table datasource wykrywa tylko zmiany dla nowej instancji tablicy
      // dlatego wykonujemy kopie przed przyspisaniem jej do zmiennej basket
      const products = response.products.concat([]); // używamy konkat by połączyc tablice produktów z pustą tablicą i stworzyć nową tablice
      this.basket = products
      this.basketPrice = response.price
      console.log('bakset:', this.basket)
    })
  }

  deleteProduct(product: ProductResponse) {
    this.basketService.deleteProduct(product);
  }

}
