import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable< Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>('https://fakestoreapi.com/products/'+productId);
  }
}
