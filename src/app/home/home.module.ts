import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { OfferComponent } from './home/offer/offer.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { WhyUsComponent } from './home/why-us/why-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';





@NgModule({
  declarations: [
    HomeComponent,
    ShowcaseComponent,
    OfferComponent,
    NewsletterComponent,
    WhyUsComponent,



  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule

  ]
})
export class HomeModule { }
