import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage/homepage.component';
import { ServicesModule } from './services/services.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomepageComponent
  ], 
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ServicesModule,
    RouterModule
  ],
  exports:[
    ServicesModule
  ]
})
export class FeaturesModule { }
