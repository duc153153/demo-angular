import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Brand } from '../../models/brand/brand';


@Injectable({
  providedIn: 'root'
})
export class BrandApiService {
  apiURL = 'http://localhost:80/api/'
  constructor(private http: HttpClient) {}

  findBrand($id):Observable<Brand> {
    return this.http.get<Brand>(this.apiURL+'brands/'+$id);
  }
}
