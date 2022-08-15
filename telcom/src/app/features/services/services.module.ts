import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';

import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';



const primeNgModules=[DropdownModule, ToolbarModule, TableModule,	ButtonModule]

@NgModule({
  declarations: [
    ServiceListComponent,
    AddServiceComponent,
    
   
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule, 
    ...primeNgModules,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CoreModule,
  
    
  ],
  exports:[ServiceListComponent]
})
export class ServicesModule { }
