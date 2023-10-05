import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BasketComponent } from './basket/basket.component';
import { BasketEmptyComponent } from './basket-empty/basket-empty.component';


@NgModule({
  declarations: [BasketComponent,
  BasketEmptyComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
})
export class BasketModule { }
