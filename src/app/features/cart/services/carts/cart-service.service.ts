import { EventEmitter, Injectable } from '@angular/core';
import { CartModel } from '../../models/cartModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  CartModels:CartModel[]=[];

  addCart:EventEmitter<any>=new EventEmitter;

  constructor() { }

get CartItems():any{
  return this.CartModels
}

set CartItems(cart:CartModel){
  const cartItem=this.CartModels.find(c => c.product.id===cart.product.id);
  if(!cartItem){
    this.CartModels.push({...cart, quantity:1});
    this.addCart.emit(this.CartModels)
  }else
  cartItem.quantity+=1;
}

removeItem(cart:CartModel){
  const cartItem:any=this.CartModels.find(c => c.product.id===cart.product.id);
  this.CartModels.splice((this.CartModels.indexOf(cartItem)),1);

}

}
