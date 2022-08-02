import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productList!:Product[];

  constructor(private productService:ProductsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getList().subscribe((response)=>{
      this.productList=response;
    })
  }

  deleteProduct(id:number){
    let result=confirm("Are you sure you want to delete this item?");
    if(result){
      this.productService.delete(id).subscribe(()=>{
        setTimeout(()=>{
          this.getProducts();
        },1000);
      })
    }
    this.toastr.success("Product deleted", "Delete")
  }



}
