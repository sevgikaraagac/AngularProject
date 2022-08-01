import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;

  //companyName=new FormControl('',Validators.required);

  constructor(private formBuilder:FormBuilder, private customerService:CustomersService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm():void{

    this.registerForm=this.formBuilder.group(
    {
      companyName: ["",//default değer//
      Validators.required],
      contactName: ["", [Validators.required, Validators.minLength(2)]],
      contactTitle: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      region: ["", Validators.required],
      postalCode: ["", Validators.required],
      country: ["", Validators.required],
      phone: ["", Validators.required],
      customerKey: ["", Validators.required]
    }

  );

  }

  register(){
    if(!this.registerForm.valid){
      console.warn('Gerekli alanları doldurunuz');
      return;
    }
    const customer:Customer={
      ...this.registerForm.value,
      city:this.registerForm.value.city.toUpperCase()

      // companyName: this.registerForm.get('companyName')!.value,
      // contactName: this.registerForm.get('contactName')!.value,
    }
    this.customerService.add(customer).subscribe(response =>{
      console.info(response);
    })

  }

}
