import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
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
  getProduct(): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/products');
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


//   deleteProduct(id) {
//     console.log('Delete Product id ' + id);

//     this.http.delete('http://laravel-api.testing/api/product/' + id).subscribe(res => {
//         console.log('Product Deleted and refresh Table');
//         this.getProducts();
//     }, err => {
//         console.log('Error occured');
//     });
// }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

