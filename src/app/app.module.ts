import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { ChangeProductCardDirective } from './directives/changeProductCard/change-product-card.directive';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    RegisterComponent,
    UpdateCustomerComponent,
    DashboardComponent,
    ProductDashboardComponent,
    UpdateProductComponent,
    KdvPipe,
    SaleDirective,
    ChangeProductCardDirective,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
