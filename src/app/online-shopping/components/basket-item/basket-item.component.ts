import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {

  @Input() count: number = 0;
  @Input() product!: Product;

  @Output() addToBasket = new EventEmitter<Product>();
  @Output() subtractFromBasket = new EventEmitter<Product>();
}
