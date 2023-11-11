import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductResponse } from 'src/app/services/products/ProductResponse';

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
  constructor() { }

  ngOnInit() {
  }
  addProduct(product: ProductResponse): void {
    this.buyProduct.emit(product)
  }
}
