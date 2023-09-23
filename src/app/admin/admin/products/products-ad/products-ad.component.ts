import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-ad',
  templateUrl: './products-ad.component.html',
  styleUrls: ['./products-ad.component.css']
})
export class ProductsAdComponent implements OnInit {
  categories$: Observable<Array<CategoryResponse>>

  productAddForm = new FormGroup({
    categoryId: new FormControl(''),
    price: new FormControl(''),
    name: new FormControl(''),
    thumbnail: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl(''),
    description: new FormControl('')

  })
  constructor(private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {

  this.categories$ = this.categoriesService.getAllCategories()
  }


  addProduct(value){
    this.productsService.addProduct(value).subscribe(response=>{
      this.router.navigateByUrl('admin/products')
    })
  }
}
