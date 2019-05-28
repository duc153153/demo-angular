import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../../models/product/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SecretProductService {
  apiURL = 'http://localhost:80/api'
  constructor(private http: HttpClient) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  getProduct($currentPage): Observable<Product> {
    return this.http.get<Product>(this.apiURL + '/product/get_pagination?page='+$currentPage+'&page_size=50')
  }
  
  


}
