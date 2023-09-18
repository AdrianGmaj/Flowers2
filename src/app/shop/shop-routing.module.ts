import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { SelectedCategoryComponent } from './shop/selected-category/selected-category.component';

const routes: Routes = [
  {
    path: "shop", component: ShopComponent,
    children: [
      { path: '', component: AllCategoriesComponent },
      {path:":categoryId", component: SelectedCategoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
