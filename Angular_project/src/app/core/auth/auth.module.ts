import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './intercepters/auth/auth.interceptor';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { tokenGetter } from './services/auth/auth.service';
import { authReducer } from './store/reducers/auth.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiURL],
        disallowedRoutes: []
      }
    }),
    StoreModule.forRoot(authReducer)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AuthModule {}