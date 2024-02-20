import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutHomeComponent } from './checkout-home/checkout-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckoutHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckoutHomeComponent
      }
    ])
  ]
})
export class CheckoutModule { }
