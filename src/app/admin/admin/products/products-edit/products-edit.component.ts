import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'


import { forkJoin } from 'rxjs'


import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponse } from 'src/app/services/products/ProductResponse';
import { ProductPost } from 'src/app/services/products/ProductPost';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';


@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {


  productById: ProductResponse;
  categories: Array<CategoryResponse>
  productEditForm: FormGroup;
  productId: any

  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute,) { }

  ngOnInit() {


    this.productId = this.route.snapshot.paramMap.get('productId')
    this.categories = this.route.snapshot.data['allCategories']
    this.productById = this.route.snapshot.data['productById']


    this.productEditForm = new FormGroup({
      categoryId: new FormControl(this.productById.categoryId),
      price: new FormControl(this.productById.price),
      name: new FormControl(this.productById.name),
      thumbnail: new FormControl(this.productById.thumbnail),
      image: new FormControl(this.productById.image),
      active: new FormControl(this.productById.active),
      description: new FormControl(this.productById.description)



    })
  }


  editProduct(id: number, value: ProductPost) {
    this.productService.editProduct(id, value).subscribe(() => {
      this.router.navigateByUrl('/admin/products')
    })
  }
}

