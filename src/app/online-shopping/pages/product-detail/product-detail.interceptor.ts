import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProductDetailInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('products')) {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.body) {
            const body = event.body;

            // Check if the response is an array or a single object
            if (Array.isArray(body)) {
              // If it's an array, rename the id property for each object
              event = event.clone({ body: body.map(item => this.renameProductId(item)) });
            } else {
              // If it's a single object, rename the id property
              event = event.clone({ body: this.renameProductId(body) });
            }
          }
          return event;
        })
      );
    }
    return next.handle(request);
  }

  private renameProductId(item: any) {
    // Only rename if the property id exists
    if (item.id !== undefined) {
      item.productId = item.id;
      delete item.id;
    }
    return item;
  }
}
