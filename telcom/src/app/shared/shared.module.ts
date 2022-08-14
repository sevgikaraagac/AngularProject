import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ServicesModule } from '../features/services/services.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent
  ]
})
export class SharedModule { }
