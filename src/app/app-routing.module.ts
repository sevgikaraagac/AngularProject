import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CustomerDashbordComponent } from './pages/customer-dashbord/customer-dashbord.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent, pathMatch:'full'},
  {path:'add-product', component: AddProductComponent, pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'dashbord/customer', component: CustomerDashbordComponent},
  {path:'dashbord/customer/:id', component: UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
