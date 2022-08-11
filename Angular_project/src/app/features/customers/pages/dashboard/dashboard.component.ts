import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/features/customers/models/customer';
import { CustomersService } from 'src/app/features/customers/services/customers/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerList! : Customer[];

  constructor(private customerService:CustomersService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getList().subscribe((response) =>{
      this.customerList = response;
    })
  }

  deleteCustomer(customerId:number){
    let result = confirm("Are you sure you want to delete this item?");
    if(result){
    this.customerService.delete(customerId).subscribe(()=>{
      setTimeout(() => {
        this.getCustomers();
      }, 1000);
    })
    } 
    this.toastr.success("Customer deleted","Delete")
  }


}