import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAdComponent } from './products-ad/products-ad.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsResolveService } from 'src/app/services/products/products-resolve.service';
import { CategoriesAllResolveService } from 'src/app/services/categories/categories-all-resolve.service';

const routes: Routes = [
  {path:'', component: ProductsListComponent},
  {path:'products-add', component: ProductsAdComponent},
  {
    path:'product-edit/:productId', component: ProductsEditComponent,
    resolve:{
      productById: ProductsResolveService,
      allCategories: CategoriesAllResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
