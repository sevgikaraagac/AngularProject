import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {path:'dashboard/customers', component: DashboardComponent},
  {path:'dashboard/customer/add', component: UpdateCustomerComponent},  
  {path:'dashbord/customer/:id', component: UpdateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
