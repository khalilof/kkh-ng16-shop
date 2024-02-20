import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProductPipe } from './online-shopping/pipes/search-product.pipe';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './online-shopping/components/products-list/products-list.component';
import { BasketComponent } from './online-shopping/components/basket/basket.component';
import { ProductItemComponent } from './online-shopping/components/product-item/product-item.component';
import { HeaderBasketComponent } from './online-shopping/components/header-basket/header-basket.component';
import { BasketItemComponent } from './online-shopping/components/basket-item/basket-item.component';
import { ShopHomeComponent } from './online-shopping/pages/shop-home/shop-home.component';
import { ProductDetailComponent } from './online-shopping/pages/product-detail/product-detail.component';
import { ProductsComponent } from './online-shopping/pages/products/products.component';
import { NotAllowedComponent } from './online-shopping/pages/not-allowed/not-allowed.component';
import { ProductDetailInterceptor } from './online-shopping/pages/product-detail/product-detail.interceptor';
import { SignalNonSignalComponent } from './experiments/signal-non-signal/signal-non-signal.component';
import { ChildSignalNonSignalComponent } from './experiments/signal-non-signal/child-signal-non-signal/child-signal-non-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    BasketComponent,
    ProductItemComponent,
    HeaderBasketComponent,
    BasketItemComponent,
    SearchProductPipe,
    ShopHomeComponent,
    ProductDetailComponent,
    ProductsComponent,
    NotAllowedComponent,
    SignalNonSignalComponent,
    ChildSignalNonSignalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: ProductDetailInterceptor,
      multi: true,
    },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
