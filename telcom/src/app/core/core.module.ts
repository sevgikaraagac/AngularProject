import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PaginationPipe } from './pipes/pagination.pipe';


@NgModule({
  declarations: [
    PaginationPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    PaginationPipe
  ]
})
export class CoreModule { }
