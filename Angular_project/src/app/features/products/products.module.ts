import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeProductCardDirective } from './directives/changeProductCard/change-product-card.directive';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    UpdateProductComponent,
    ProductCardComponent,
    ProductListComponent,
    SaleDirective,
    FilterProductPipe,
    KdvPipe,
    ChangeProductCardDirective,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
    
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
