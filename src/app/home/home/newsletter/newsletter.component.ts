import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from 'src/app/services/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  NewsletterForm = new FormGroup({

    email: new FormControl('',
      [Validators.required,
      Validators.email,
      ],)

  })

  constructor(private newsletterService: NewsletterService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.newsletterService.addNewsletter(this.NewsletterForm.getRawValue()).subscribe({
      next: response => {
        console.log('addNewsletter response', response)
        this.NewsletterForm.reset();
        this.NewsletterForm.get('email').markAsPristine();
        this.NewsletterForm.get('email').markAsUntouched();
        this.NewsletterForm.get('email').updateValueAndValidity();
      },
      error: errorResponse => {
        console.log('addNewsletter error', errorResponse.error)
      }
    })

  }

}
