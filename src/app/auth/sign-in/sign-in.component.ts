import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  SignInForm = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.email,
      ],
    ),
    password: new FormControl('',
      [Validators.required]),

  })
  authService: any;
  router: any;
  constructor() { }

  ngOnInit() {

  }


  onSubmit() {
    this.authService.signIn(this.SignInForm.getRawValue())
      .subscribe({

       next: (response) => {
        if (response.success) {
          if (response.role === 1) {
            this.router.navigateByUrl('user')
          }
          else if (response.role === 2) {
            this.router.navigateByUrl('admin')
          }
        }
      },
    error: (errorResponse: HttpErrorResponse) => {
      this.SignInForm.setErrors({
        credentials: errorResponse.error.message
      })
    }
    })
  }
}
