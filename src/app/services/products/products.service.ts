import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiControllerUrl: string= `${environment.apiURL}/products`;

  constructor(private httpClient:HttpClient) { }


    getList():Observable<Product[]>{
      return this.httpClient.get<Product[]>(this.apiControllerUrl);
    }

    add(product:Product):Observable<Product>{
      return this.httpClient.post<Product>(this.apiControllerUrl, product);
    }
    
    delete(id:number):Observable<Product>{
      return this.httpClient.delete<Product>(this.apiControllerUrl + `/${id}` );
    }
    
    update(product:Product):Observable<Product>{
      return this.httpClient.put<Product>(this.apiControllerUrl + `/${product.id}`, product);
    }
    
      getProductById(id:number):Observable<Product>{
        return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`)
      }




}

