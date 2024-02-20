import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  product: Product | null = null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.product = activatedRoute.snapshot.data['product'] as Product;
  }
}
