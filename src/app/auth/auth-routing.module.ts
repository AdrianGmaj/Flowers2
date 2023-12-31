import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AuthUserGuard } from '../services/guards-services/auth-user.service';

const routes: Routes = [
  {path:'sign-in',component: SignInComponent},
  {path:'sign-up',component: SignUpComponent},
  {path:'user', component: UserAccountComponent,canActivate: [AuthUserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
