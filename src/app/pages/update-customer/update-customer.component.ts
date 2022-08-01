import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer!: Customer;
  updateForm!:FormGroup;
  
  constructor(private route: ActivatedRoute, private customerService:CustomersService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getByid();
  }

  createUpdateForm():void{

    this.updateForm=this.formBuilder.group(
    {
      id: [this.customer.id , Validators.required],
      companyName: [this.customer.companyName , Validators.required],
      contactName: [this.customer.contactName, [Validators.required, Validators.minLength(2)]],
      contactTitle: [this.customer.contactTitle, Validators.required],
      street: [this.customer.street, Validators.required],
      city: [this.customer.city, Validators.required],
      region: [this.customer.region, Validators.required],
      postalCode: [this.customer.postalCode, Validators.required],
      country: [this.customer.country, Validators.required],
      phone: [this.customer.phone, Validators.required],
      customerKey: [this.customer.customerKey, Validators.required]
    }
  );

  }

  update(){
    if(!this.updateForm.valid){
      console.warn('Gerekli alanları doldurunuz');
      return;
    }
  }

  getByid(){
  
    const routeParams = this.route.snapshot.paramMap;
    const customerIdFromRoute = Number(routeParams.get('id'));

    this.customerService.getById(customerIdFromRoute).subscribe(response =>{
    this.customer=response;
    this.createUpdateForm();
    });
  }

   updateCustomer(){
    const customer:Customer={
      ...this.updateForm.value,
    }
    
    this.customerService.update(customer).subscribe(()=>{
      console.log(customer);
    })
          
    }
  
  

}
