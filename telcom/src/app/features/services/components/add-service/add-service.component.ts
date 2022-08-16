import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  serviceForm! : FormGroup;
  service!:Service
  constructor(private formBuilder: FormBuilder, private router:Router, private toastr: ToastrService,
    private activatedRoute:ActivatedRoute, private serviceService:ServicesService) { }

  ngOnInit(): void {
    this.getServiceIdFromRoute();
  }

  createServiceForm(): void{
    this.serviceForm = this.formBuilder.group({
      name: [this.service?.name || '',Validators.required],
    })   
  }

  getServiceIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) 
      this.getServiceById(params['id']);
      else{
        this.createServiceForm();
      };
    });
  }
  getServiceById(id:number) {
    this.serviceService.getServiceById(id).subscribe((response) => {
      this.service = response;
      this.createServiceForm();
    });
  }
  save(){
    if(this.service) this.update();
    else{
      this.add();
    }
  }

  update() {
    if (this.serviceForm.invalid) {
       this.toastr.warning("Please fill the required areas","Update")
      return;
    }
    const service:Service = Object.assign({id:this.service.id}, this.serviceForm.value); 
    this.serviceService.update(service).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl("/services");
         this.toastr.success("Service succesfully updated!","Update")
      }, 1000);
    });
  }
  add(){
    if (this.serviceForm.invalid) {
       this.toastr.warning("Please fill the required areas!!!","Add")
      return;
    }

    const service:Service = {
      ...this.serviceForm.value,
    }

    this.serviceService.add(service).subscribe(response =>{
      setTimeout(() => {
        this.router.navigateByUrl("/services");
         this.toastr.success("Customer succesfully added!","Add")
      }, 1000);
    })
  }

  
}












