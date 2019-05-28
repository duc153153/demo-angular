import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
   // Define API
   apiURL = 'http://localhost:80/api';
   constructor(private http: HttpClient) { }
 
   // Http Options
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     })
   }
 
   // HttpClient API get() method => Fetch Product list
   getProduct($page): Observable<Product> {
     return this.http.get<Product>(this.apiURL + '/products?page='+$page);
   }
   getProductId(id): Observable<Product> {
     return this.http.get<Product>(this.apiURL + '/products/'+id)
   }
   updateProduct(id,Product): Observable<Product> {
     return this.http.put<Product>(this.apiURL+'/products/'+id,JSON.stringify(Product), this.httpOptions)
   }
   addProduct($Product): Observable<Product> {
     return this.http.post<Product>(this.apiURL+'/products/',JSON.stringify($Product), this.httpOptions)
   }
 
   delProduct(id){
     return this.http.delete<Product>(this.apiURL+'/products/'+id)
   }
 

}
