import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  categories$: Observable<Array<CategoryResponse>>


  constructor(private categoriesService: CategoriesService
) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAllCategories()
    
    

  }

}
