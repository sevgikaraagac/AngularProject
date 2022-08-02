import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent, pathMatch:'full'},
  {path:'add-product', component: AddProductComponent, pathMatch:'full'},
  {path:'dashboard/customer/add', component: UpdateCustomerComponent},
  {path:'dashboard/customers', component: DashboardComponent},
  {path:'dashbord/customer/:id', component: UpdateCustomerComponent},
  {path:'dashboard/products', component: ProductDashboardComponent},
  {path:'dashboard/product/add', component: UpdateProductComponent},
  {path:'dashboard/product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
