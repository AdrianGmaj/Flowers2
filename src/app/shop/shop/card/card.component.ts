import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductResponse } from 'src/app/services/products/ProductResponse';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {
  @Input()
  product: ProductResponse

  @Output()
  buyProduct: EventEmitter<ProductResponse> = new EventEmitter()
  constructor(private dialog: MatDialog,) { }


  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }// else {
      //   entry.target.classList.remove('show')
      // }
    })
  })


  ngOnInit() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element)=> this.observer.observe(element))
  }
  addProduct(product: ProductResponse): void {
    this.buyProduct.emit(product)
  }
  showDetails(product: ProductResponse) {
    console.log(product)
    this.dialog.open(DialogComponent, {
      data: product
    });
  }
}
