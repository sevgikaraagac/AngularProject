import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor.interceptor';
import { LoginComponent } from './auth/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageModule } from './storage/storage.module';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LocalStorageService } from './storage/services/local-storage.service';
import { StorageService } from './storage/services/storageService';


export function jwtOptionsFactory(StorageService:StorageService){
  return{
    tokenGetter:() => {
      return StorageService.get('token');
    },
    allowedDomains:['localhost:3000'],

  };
}

@NgModule({
  declarations: [
  
    LoadingOverlayComponent,
       LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    StorageModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory:jwtOptionsFactory,
        deps:[LocalStorageService]
      },
    }),
  ],
  exports:[
   LoadingOverlayComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class CoreModule { }
