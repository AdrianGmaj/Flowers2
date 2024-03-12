import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  })
  constructor() { }

  ngOnInit() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => this.observer.observe(element))
  }

}
