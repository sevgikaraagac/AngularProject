import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!:Product[];
  cartItems:any[]=[];
  //httpClient!:HttpClient;

  constructor(private productsService:ProductsService) { 
    //dependency ınjection ile Angular otomatik olarak inject eder
   //this.httpClient=httpClient;
  
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }

  getProducts(){
    this.productsService.getList().subscribe(response =>{
      this.productList=response;
    });
  }
  
  addToCart(product:Product){
    let itemToFind=this.cartItems.find(c=>c==product.name)
    if(!itemToFind){
      this.cartItems.push(product.name)
    }
  
  }

}
