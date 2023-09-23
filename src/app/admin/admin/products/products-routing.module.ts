import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAdComponent } from './products-ad/products-ad.component';

const routes: Routes = [
  {path:'', component: ProductsListComponent},
  {path:'products-add', component: ProductsAdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
