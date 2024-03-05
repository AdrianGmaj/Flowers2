import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { BasketService } from '../services/basket/basket.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
basket
  constructor(private authService: AuthService,
    private basketService: BasketService) { }

  ngOnInit() {

    this.basketService.getBasket().subscribe((response)=>{
      this.basket = response
          })


  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.nav') as HTMLElement;


      if (window.scrollY > element.clientHeight * 3) {
        element.classList.add('scrolled');
      } else {
        element.classList.remove('scrolled');
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
}