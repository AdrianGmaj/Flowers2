import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAdComponent } from './products-ad/products-ad.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [ProductsListComponent,
  ProductsAdComponent,
ProductsEditComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ProductsModule { }
