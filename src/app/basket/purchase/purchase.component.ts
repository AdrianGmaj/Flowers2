import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Basket } from 'src/app/services/auth/basket';
import { BasketService } from 'src/app/services/basket/basket.service';
import { OrderCreateRequest, OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  order: OrderCreateRequest
  basket: Basket = { products: [], price: 0 }

  PurchaseData = new FormGroup({
    name: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ],
    ),
    city: new FormControl('',
      [Validators.required,
      Validators.minLength(3)]),


    address: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),

    cardNumber: new FormControl('',
      [Validators.required,
      Validators.minLength(13),
      Validators.maxLength(16),
      ]),


    expiration: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),

    security: new FormControl('',
      [Validators.required,
      Validators.minLength(3),
      ]),


  })

  constructor(private orderService: OrderService,
    private basketService: BasketService,
    private router: Router) { }

  ngOnInit() {
    this.basketService.getBasket().subscribe(bs => this.basket = bs)
  }

  buy() {

   


    let data = this.PurchaseData.getRawValue()

    this.order = {
      order: {
        price: this.basket.price,
        products: this.basket.products.map((item)=>{
          const productDetails =  {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            thumbnail: item.product.thumbnail,
            quantity: item.count,
          }
          return productDetails
        })
      },
      data: {
        name: data.name,
        city: data.city,
        address: data.address,
        cardNumber: data.cardNumber,
        expiration: data.expiration,
        security: data.security
      }
    }

    this.orderService.create(this.order).subscribe({
      next: response => {
        console.log('next', response)

        this.basketService.cleanBasket()
      },
      error: err => {
        console.log('err', err)
      }
    })

alert('thanks for shoping')
this.router.navigateByUrl('/home')

  }
}
