import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './core/auth/auth.module';
import { CustomersModule } from './features/customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    CategoryListComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    CoreModule,
    SharedModule,
    AuthModule,
    CustomersModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
