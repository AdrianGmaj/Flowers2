import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BasketComponent } from './basket/basket.component';
import { BasketEmptyComponent } from './basket-empty/basket-empty.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { PurchaseComponent } from './purchase/purchase.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [BasketComponent,
    BasketEmptyComponent, PurchaseComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule

  ],
})
export class BasketModule { }
