import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { ShowcaseTextComponent } from './home/showcase-text/showcase-text.component';



@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    ShowcaseTextComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
