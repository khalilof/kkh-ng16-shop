import { Injectable, signal } from '@angular/core';
import { BasketProduct, Product, PRODUCTS_DB } from '../model/product';
import { BackendAPIService } from '../services/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShopStateService {

  public allProducts = signal<Product[]>(PRODUCTS_DB);
  public basket = signal<BasketProduct[]>([]);
  constructor(private backend: BackendAPIService) {
    this.backend.getAllProducts().subscribe(it => {
      this.allProducts.set(it);
    })
  }

  addProductToBasket(product: Product): void {
    this.basket.update(currentBasketProducts => {
      const alreadyInBasket = currentBasketProducts.find(search => search.id === product.id);
      if (alreadyInBasket) {
        alreadyInBasket.count++;
      } else {
        currentBasketProducts.push({...product, count: 1})
      }
      return currentBasketProducts;
    });
  }

  subtractProductFromBasket(product: Product): void {
    this.basket.update(currentBasketProducts => {
      const alreadyInBasket = currentBasketProducts.find(search => search.id === product.id);
      if (alreadyInBasket) {
        if (alreadyInBasket.count <= 1) {
          currentBasketProducts.splice(currentBasketProducts.indexOf(alreadyInBasket), 1)
        } else {
          alreadyInBasket.count--;
        }
      }
      return currentBasketProducts;
    });
  }
}
