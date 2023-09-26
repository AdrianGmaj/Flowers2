import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BasketService } from 'src/app/services/basket/basket.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';
import { ProductResponse } from 'src/app/services/products/ProductResponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.scss']
})
export class SelectedCategoryComponent implements OnInit {
  categoryId: string;
  category$: Observable<CategoryResponse>;
  products$: Observable<Array<ProductResponse>>
  
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private basketService: BasketService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.categoryId = param.get('categoryId');
      this.category$ = this.categoriesService.getCategoryById(this.categoryId);
      this.products$ = this.productsService.getAllProducts().pipe(
        map((response) => {
          return response.filter((product) => product.categoryId === parseInt(this.categoryId))
        })
      )

    })
  }

  addProduct(product){
    this.basketService.addProduct(product)
      }
}
