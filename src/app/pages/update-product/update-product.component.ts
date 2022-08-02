import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm! :FormGroup;
  product!:Product;

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder,
    private router:Router, private toastr:ToastrService, private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  createProductForm(): void{ 
    this.productForm = this.formBuilder.group({
      name: [this.product?.name  || '',Validators.required],
      supplierId: [this.product?.supplierId || '',Validators.required],
      categoryId: [this.product?.categoryId || '',Validators.required],
      quantityPerUnit: [this.product?.quantityPerUnit || '',Validators.required],
      unitPrice: [this.product?.unitPrice || '',Validators.required],
      unitsInStock: [this.product?.unitsInStock  || '',Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder || '',Validators.required],
      reorderLevel: [this.product?.reorderLevel  || '',Validators.required],
      discontinued: [this.product?.discontinued  || '',Validators.required],
      
    })    
  } 

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getProductById(id:number){
    this.productService.getProductById(id).subscribe((response)=>{
      this.product=response;
      this.createProductForm();
    });
  }

  save(){
    if(this.product)
    this.update();
    else{
      this.add();
    }
  }

  update(){
    if(this.productForm.invalid){
      this.toastr.warning("Please fill the required areas", "Update");
      return;
    }
    const product:Product=Object.assign({id:this.product.id}, this.productForm.value);
    this.productService.update(product).subscribe(()=>{
    setTimeout(()=>{
      this.router.navigateByUrl("/dashboard/products");
      this.toastr.success("Customer succesfully updated", "Update");
    },1000);
  });
  }

  add(){
    if(this.productForm.invalid){
      this.toastr.warning("Please fill the required areas", "Add");
      return;
    }
    const product:Product={
      ...this.productForm.value,
    }
    this.productService.add(product).subscribe(response=> {
      setTimeout(()=>{
        this.toastr.success("Customer succesfully added", "Add");
      }, 1000);
    })
  }



}
