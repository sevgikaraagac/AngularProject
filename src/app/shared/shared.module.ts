import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ProductsModule } from '../features/products/products.module';
import { SharedRoutingModule } from './shared-routing.module';
import { CategoryListComponent } from '../features/categories/components/category/category-list.component';
import { CartModule } from '../features/cart/cart.module';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent, CategoryListComponent],
  imports: [CommonModule, SharedRoutingModule, ProductsModule, CartModule],
  exports: [NavbarComponent]
})
export class SharedModule { }
