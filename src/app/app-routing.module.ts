import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './online-shopping/pages/shop-home/shop-home.component';
import { ProductDetailComponent } from './online-shopping/pages/product-detail/product-detail.component';
import { productDetailResolver } from './online-shopping/pages/product-detail/product-detail.resolver';
import { ProductsComponent } from './online-shopping/pages/products/products.component';
import { productDetailGuard } from './online-shopping/pages/product-detail/product-detail.guard';
import { NotAllowedComponent } from './online-shopping/pages/not-allowed/not-allowed.component';
import { SignalNonSignalComponent } from './experiments/signal-non-signal/signal-non-signal.component';


const routes: Routes = [
  {
    path: 'exprmt',
    component: SignalNonSignalComponent
  },
  {
    path: 'shop',
    component: ShopHomeComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
        resolve: {
          product: productDetailResolver
        },
        canActivate: [productDetailGuard]
      },
      {
        path: 'not-allowed',
        component: NotAllowedComponent,
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
