import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const productId = route.paramMap.get('id');
  const router = inject(Router);
  if (Number(productId) === 4) {
    router.navigate(['shop/not-allowed']);
    return false;
  }
  return true;
};
