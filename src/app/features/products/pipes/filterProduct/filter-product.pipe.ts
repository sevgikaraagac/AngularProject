import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(product: Product[], filterText:string): Product[] {

    return filterText.length>0 ?
      product.filter(p =>
        p.name.toLowerCase().includes(filterText.toLowerCase())): product;
  }

}
