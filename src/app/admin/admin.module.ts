import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MeterialDesignModule } from '../meterial-design/meterial-design.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MeterialDesignModule,
    FormsModule
  ]
})
export class AdminModule { }
