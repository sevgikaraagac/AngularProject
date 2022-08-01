import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer-dashbord',
  templateUrl: './customer-dashbord.component.html',
  styleUrls: ['./customer-dashbord.component.css']
})
export class CustomerDashbordComponent implements OnInit {

  customerList!:Customer[];

  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getList().subscribe((response) =>{
      this.customerList=response;
    });
  }

  deleteCustomer(customerId:number){
    let result = confirm("Are you sure you want to delete this item?");
    if(result){
    this.customerService.delete(customerId).subscribe(()=>{this.getCustomers();})
    }
  }


}


