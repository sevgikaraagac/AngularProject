import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/auth/guards/login-guard/login-guard.guard';
import { AddProductComponent } from './features/products/pages/add-product/add-product.component';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';



const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'add-product', component: AddProductComponent, canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
