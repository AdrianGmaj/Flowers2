import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent,
children:[
  {
    path:'categories',
    loadChildren:()=> import ('./admin/categories/categories.module').then(m=>m.CategoriesModule)
  },
  {
    path:'products',
    loadChildren:()=> import ('./admin/products/products.module').then(m=>m.ProductsModule)
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
