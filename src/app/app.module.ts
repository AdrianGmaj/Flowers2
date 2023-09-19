import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { ContactModule } from './contact/contact.module';
import { ShopModule } from './shop/shop.module';
import { CategoriesService } from './services/categories/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products/products.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ShopModule,
    ContactModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [CategoriesService,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
