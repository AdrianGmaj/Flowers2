import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { SelectedCategoryComponent } from './shop/selected-category/selected-category.component';


@NgModule({
  declarations: [ShopComponent,
    AllCategoriesComponent,
    SelectedCategoryComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }