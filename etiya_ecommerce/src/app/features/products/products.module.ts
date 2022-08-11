import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCartComponent } from './components/product-cart/product-cart/product-cart.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';


@NgModule({
  declarations: [
    ProductCartComponent,
    ProductListComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductsModule { }
