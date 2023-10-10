import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  orders
  constructor(private authService: AuthService,
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.ordersForLoggedUser().subscribe(response => {
      console.log(response)
      this.orders = response
    })
  }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;


  logOut() {
    this.authService.signOut()
      .subscribe(() => {
        this.router.navigateByUrl('sign-in')
      })

  }
}
