import { Component } from '@angular/core';
import { ShopStateService } from '../../state/shop-state.service';
import { Product } from '../../model/product';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  constructor(public state: ShopStateService) {
  }

  handleSubtractFromBasket(product: Product): void {
    this.state.subtractProductFromBasket(product);
  }

  handleAddToBasket(product: Product): void {
    this.state.addProductToBasket(product);
  }
}
