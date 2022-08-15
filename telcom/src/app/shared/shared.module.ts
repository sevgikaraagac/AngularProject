import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ServicesModule } from '../features/services/services.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ListSkeletonComponent } from './components/list-skeleton/list-skeleton.component';
import {SkeletonModule} from 'primeng/skeleton';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    ListSkeletonComponent,
  ],
  imports: [
    CommonModule,
    
    FontAwesomeModule,
    RouterModule,
    SkeletonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashboardLayoutComponent,
    ListSkeletonComponent
  ]
})
export class SharedModule { }
