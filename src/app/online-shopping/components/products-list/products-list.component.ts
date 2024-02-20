import { Component, effect } from '@angular/core';
import { ShopStateService } from '../../state/shop-state.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  currentSearchTerm: string = '';
  constructor(public state: ShopStateService) {
    effect(() => {
      console.log(state.allProducts());
    });
  }

  handleAddToBasket(product: Product): void {
    this.state.addProductToBasket(product);
  }
}
