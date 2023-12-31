import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserAccountComponent } from './user-account/user-account.component';
import { MatCardModule } from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatAccordion } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    CdkAccordionModule,
    MatDividerModule

    
  ]
})
export class AuthModule { }
