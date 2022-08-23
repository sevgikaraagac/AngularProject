import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerDemographicInfo } from 'src/app/features/customers/models/customerDemographicInfo';
import { CustomerState } from 'src/app/features/customers/store/customer.reducer';
import { setDemographicInfo } from 'src/app/features/customers/store/customerToAdd/customerToAdd.actions';

@Component({
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    gender: new FormControl('Kadın', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    nationalId: new FormControl('', Validators.required),
  });
  constructor(private customerStore:Store<CustomerState>, private router:Router) { }

  ngOnInit(): void {
  }

  addDemographicInfo(){
    const demographicInfo:CustomerDemographicInfo=Object.assign(this.profileForm.value);
    this.customerStore.dispatch(setDemographicInfo(demographicInfo))
    this.router.navigateByUrl(''); //todo
}

}