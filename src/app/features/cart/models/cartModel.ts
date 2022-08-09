import { Product } from "../../products/models/product";


export interface CartModel{
    product:Product,
    quantity:number
}