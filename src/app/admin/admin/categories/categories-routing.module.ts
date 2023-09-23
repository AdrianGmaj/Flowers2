import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesAdComponent } from './categories-ad/categories-ad.component';

const routes: Routes = [
  {path: '', component: CategoriesListComponent},
  {path: 'addCategory', component:CategoriesAdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
