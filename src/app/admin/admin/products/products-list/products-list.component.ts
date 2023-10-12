import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Array<any>>


  displayedColumns: string[] = [

    'price',
    'name',

    'active',

    'actions',

  ];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts()
  }


  deleteProduct(id) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products$ = this.productsService.getAllProducts()
    })
  }


}
