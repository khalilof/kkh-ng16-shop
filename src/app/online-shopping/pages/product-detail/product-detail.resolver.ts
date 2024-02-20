import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { BackendAPIService } from '../../services/backend-api.service';
import { Product } from '../../model/product';

export const productDetailResolver: ResolveFn<Product | null> = (route, state) => {
  const backend = inject(BackendAPIService);
  const productId = route.paramMap.get('id');
  if (productId) {
    return backend.getProductById(Number(productId))
  }
  return null;
};
