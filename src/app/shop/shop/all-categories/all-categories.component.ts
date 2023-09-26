import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/services/basket/basket.service';
import { ProductResponse } from 'src/app/services/products/ProductResponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  products$: Observable<Array<ProductResponse>>

  constructor(private productsService: ProductsService,
    private basketService: BasketService) { }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts()
  }
  addProduct(product) {
    this.basketService.addProduct(product)
  }
}
