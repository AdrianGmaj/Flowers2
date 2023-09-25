import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { CategoriesService } from '../categories/categories.service';
import { CategoryResponse } from './categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesAllResolveService implements Resolve<Array<CategoryResponse>> {

  constructor(
    private categoriesService: CategoriesService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return this.categoriesService.getAllCategories()

  }
}
