import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

import { MatchPassword } from '../validators/match-password';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignUpForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
        Validators.email,]),
    
      
    password: new FormControl('',
      [Validators.required]),
      passwordConfirmation: new FormControl('',
      [Validators.required]),


  }, { validators: [this.matchPassword.validate] })
  constructor(
    private matchPassword: MatchPassword,

    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signUp(this.SignUpForm.getRawValue())
    .subscribe(response =>{
     if(response.success){
      this.router.navigateByUrl('sign-in')
     }
    })
   }
}
