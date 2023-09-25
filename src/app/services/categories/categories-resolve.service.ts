import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CategoriesService } from './categories.service';
import { CategoryResponse } from './categoryResponse';


@Injectable({
  providedIn: 'root'
})
export class CategoriesResolveService implements Resolve<CategoryResponse> {

  constructor(private categoriesService: CategoriesService) { }
  resolve(route: ActivatedRouteSnapshot) {
    console.log('>>', route.params);
    const { categoryId } = route.params;
    return this.categoriesService.getCategoryById(categoryId)
  }

}



