import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(product: Product[], filterText:string): Product[] {

    return filterText.length>0 ?
      product.filter(p =>
        p.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())): product;
  }

}
