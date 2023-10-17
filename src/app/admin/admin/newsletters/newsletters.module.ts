import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslettersComponent } from './newsletters.component';
import { NewslettersRoutingModule } from './newsletters-routing.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    NewslettersRoutingModule,
    MatTableModule
   
  ],
  declarations: [NewslettersComponent]
})
export class NewslettersModule { }
