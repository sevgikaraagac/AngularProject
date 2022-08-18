import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor.interceptor';
import { LoginComponent } from './auth/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [
  
    LoadingOverlayComponent,
       LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    StorageModule
  ],
  exports:[
   LoadingOverlayComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class CoreModule { }
