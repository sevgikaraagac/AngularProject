import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { HomepageComponent } from './features/common/pages/homepage/homepage/homepage.component';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {path: '',
   component:DashboardLayoutComponent,
  children:[{path:'homepage', component:HomepageComponent}]
},
{
  path:'',
  component:DashboardLayoutComponent,
    loadChildren:() =>
    import('./features/services/services-routing.module').then(
      m => m.ServicesRoutingModule
    )
},
{
  path: 'login',
  component:LoginComponent,
  loadChildren: () => import('./core/core-routing.module').then((m) => m.CoreRoutingModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
