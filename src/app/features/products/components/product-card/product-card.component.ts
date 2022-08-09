import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartServiceService } from 'src/app/features/cart/services/carts/cart-service.service';
import { Product } from 'src/app/features/products/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  @Output() onBtnClick=new EventEmitter();

  isCard:boolean=true;
  onMouseColor:string='yellow';
  onSaleText:string="İndirim!!!"

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void { }
  
  addToCartEvent(){
    this.onBtnClick.emit(this.product);
    this.cartService.CartItems={product:this.product, quantity:1}
  }

  

}
