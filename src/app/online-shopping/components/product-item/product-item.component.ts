import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() addToBasket = new EventEmitter<Product>();
  @Output() subtractFromBasket = new EventEmitter<Product>();
}
