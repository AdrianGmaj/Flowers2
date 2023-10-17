import { Component, OnInit } from '@angular/core';
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