import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services!:Service[];

  constructor(private serviceService:ServicesService,  private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.serviceService.getList().subscribe(response => {
      this.services=response
    })
  }

  deleteService(serviceId:number){
    let result = confirm("Are you sure you want to delete this item?");
    if(result){
    this.serviceService.delete(serviceId).subscribe(()=>{
      setTimeout(() => {
        this.getList();
      }, 1000);
    })
    } 
     this.toastr.success("Customer deleted","Delete")
  }

}
