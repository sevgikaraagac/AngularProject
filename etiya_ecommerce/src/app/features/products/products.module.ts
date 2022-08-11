import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCartComponent } from './components/product-cart/product-cart/product-cart.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductCartComponent,
    ProductListComponent
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
