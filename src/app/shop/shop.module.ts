import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { AllCategoriesComponent } from './shop/all-categories/all-categories.component';
import { SelectedCategoryComponent } from './shop/selected-category/selected-category.component';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from './shop/card/card.component';


@NgModule({
  declarations: [ShopComponent,
    AllCategoriesComponent,
    SelectedCategoryComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatSelectModule
  ]
})
export class ShopModule { }
