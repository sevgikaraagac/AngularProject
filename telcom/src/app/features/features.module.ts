import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage/homepage.component';
import { ServicesModule } from './services/services.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomepageComponent,
  ], 
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ServicesModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  exports:[
    ServicesModule
  ]
})
export class FeaturesModule { }
