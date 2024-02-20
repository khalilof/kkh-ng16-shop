import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    console.log('searching for: ', search);
    return products.filter(it => it.title.toLowerCase().includes(search.toLowerCase()))
  }

}
