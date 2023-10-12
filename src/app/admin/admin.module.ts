import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MeterialDesignModule } from '../meterial-design/meterial-design.module';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MeterialDesignModule,
    FormsModule,
    MatSelectModule
    
  ]
})
export class AdminModule { }
