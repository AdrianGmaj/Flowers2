import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  {path:'basket', component: BasketComponent},
  {path:'purchase', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
