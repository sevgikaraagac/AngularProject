import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links: any[] = [
    { label: 'Home', url: '/home' },
    { label: 'Add Product', url: '/add-product' },
    { label: 'Product List', url: '/product-list' }
  ];
  links1: string[] = ['Home', 'Add Product', 'Product List'];

  constructor() {}


  ngOnInit(): void {
    this.counter+=5;
  }
  counter:number=0;

  increase(count:number=3){
    this.counter+=count;
  }

  get Counter(){
    return this.counter.toString() +(this.counter<5?'cok az':"cok fazla")
  }

  

}
