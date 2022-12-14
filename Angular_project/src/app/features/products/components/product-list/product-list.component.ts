import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';
import { ProductsService } from 'src/app/features/products/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filterText:string="";

  productList!:Product[];
  cartItems:any[]=[];
   status: string ="init";
   indx:number= 3;
  //httpClient!:HttpClient;

  constructor(private productsService:ProductsService) { 
    //dependency ınjection ile Angular otomatik olarak inject eder
   //this.httpClient=httpClient;
  
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 1000);

  //const value: string = 'A';
    // if (value === 'B') console.log('B', value);
    // else if (value === 'A') console.log('A', value);
    // else console.log('else', value);
    // switch (value) {
    //   case 'B':
    //     console.log('B', value);
    //     break;
    //   case 'A':
    //     console.log('A', value);
    //     break;

    //   default:
    //     console.log('default', value);
    //     break;
    // }

  }

  getProducts(){
     this.status='loading';
     
    this.productsService.getList().subscribe(response =>{
      this.productList=response;
    });
    setTimeout(()=> {this.status='loaded'}, 1500);
  ;

  }
  
  addToCart(product:Product){
    let itemToFind=this.cartItems.find(c=>c==product.name)
    if(!itemToFind){
      this.cartItems.push(product.name)
    }
  
  }

}
