import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {path:'dashboard/products', component: ProductDashboardComponent},
  {path:'dashboard/product/add', component: UpdateProductComponent},
  {path:'dashboard/product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
