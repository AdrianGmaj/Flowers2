import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoryResponse } from 'src/app/services/categories/categoryResponse';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  categories$: Observable<Array<CategoryResponse>>


  displayedColumns: string[] = [
    
    'name',
    'active',
    'actions'
  ];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getAllCategories()
  }

  deleteCategory(id) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.categories$ = this.categoriesService.getAllCategories()
    })
  }

}
