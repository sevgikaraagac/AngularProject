import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './pages/add-service/add-service.component';
import { ServiceListComponent } from './pages/service-list/service-list.component';

const routes: Routes = [
  
  {path:'services', component:ServiceListComponent},
  {path:'services/add', component:AddServiceComponent},
  {path:'services/add/:id', component: AddServiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
