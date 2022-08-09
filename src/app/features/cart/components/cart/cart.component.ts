import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../models/cartModel';
import { CartServiceService } from '../../services/carts/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem!:CartModel[];

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.cartService.addCart.subscribe(cart => {
      this.cartItem=cart
    })
  }

  removeItem(cart:CartModel){
    this.cartService.removeItem(cart);
  }

}
