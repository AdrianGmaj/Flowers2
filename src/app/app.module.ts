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
import { AdminModule } from './admin/admin.module';
import { MeterialDesignModule } from './meterial-design/meterial-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
    AdminModule,
    RouterModule,
    HttpClientModule,
    MeterialDesignModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [CategoriesService,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
