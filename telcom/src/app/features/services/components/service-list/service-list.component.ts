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
  fetchStatus='pending';
  total!:Service[];
  pageNumber:number=0;
  servicesInPage!:Service[];
  ServicesArray:number[]=[];

  constructor(private serviceService:ServicesService,  private toastr: ToastrService,) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getList();
    }, 1500)
  
  }

  getList(){
    this.serviceService.getList().subscribe(response => {
      this.servicesInPage=response;
      this.total=response;
      let data=Math.ceil(response.length/5);
      for(let i=1;i<=data;i++){
        this.ServicesArray.push(i)
      }
      this.fillData(1);
      this.fetchStatus='loaded';

    },
    (error)=>{
      this.fetchStatus='error';

    }
    
    )
  }

  fillData(index:number){
    this.services=this.servicesInPage.slice((index-1)*5, 5*index)
    this.pageNumber=index;
  }

  deleteService(serviceId:number){
    let result = confirm("Are you sure you want to delete this item?");
    if(result){
    this.serviceService.delete(serviceId).subscribe(()=>{
      setTimeout(() => {
        this.ServicesArray=[];
        this.getList();
      }, 1000);
    })
    } 
     this.toastr.success("Customer deleted","Delete")
  }

}
