import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { BasketService } from '../services/basket/basket.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  basketProcutCount: number;
  sideOpen = false;
  constructor(private authService: AuthService,
    private basketService: BasketService,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit() {

    let element = document.querySelector('.nav') as HTMLElement;
    console.log(element);

    console.log('>>on init url:', this.router.url);
    if (this.router.url == '/basket' || this.router.url == '/shop' || this.router.url == '/user' || this.router.url=='/purchase') {
      element.classList.add('scrolled');
    }


    // sprawdzamy chy w ruterze zmienil sie adres
    this.router.events
      // interesuje nas tylko skonczona zmoiana adresu
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log('>>on init url:', this.router.url);
        if (this.router.url == '/basket' || this.router.url == '/shop' || this.router.url == '/user' || this.router.url=='/purchase') {
          element.classList.add('scrolled');
        } else {
          element.classList.remove('scrolled');
        }
      })


    this.basketService.getBasket().subscribe((response) => {
      this.basketProcutCount = response.products
        .map(item => item.count)
        .reduce((prev, current) => prev + current, 0);
    })


  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;

    //nie pokazuj dla basket i shop

    console.log('>> url:', this.router.url);

    if (this.router.url == '/basket' || this.router.url == '/shop' || this.router.url == '/user' || this.router.url == '/user' || this.router.url=='/purchase') {
      element.classList.add('scrolled');
    } else {
      if (window.scrollY > element.clientHeight * 1) {
        element.classList.add('scrolled');
      } else {
        element.classList.remove('scrolled');
      }
    }
  }

  isSignedAsAdmin() {
    return this.authService.isSignedAsAdmin()
  }

  isSignedAsUser() {
    return this.authService.isSignedAsUser()
  }

  isSigned() {
    return this.authService.isSigned()
  }
  showSide() {
    if (this.sideOpen == false) {
      this.sideOpen = true;
    } else {
      this.sideOpen = false
    }

  }

}