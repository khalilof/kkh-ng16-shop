import { Component, computed, effect, OnInit, Signal } from '@angular/core';
import { ShopStateService } from '../../state/shop-state.service';

@Component({
  selector: 'app-header-basket',
  templateUrl: './header-basket.component.html',
  styleUrls: ['./header-basket.component.scss']
})
export class HeaderBasketComponent {
  sum = computed(() => {
      return this.state.basket().reduce((pre, cur) => pre + cur.price * cur.count, 0)
    })
constructor(private state: ShopStateService) {

}

}
