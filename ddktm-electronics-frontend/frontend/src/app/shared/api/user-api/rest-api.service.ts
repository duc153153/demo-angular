import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    // Define API
    apiURL = 'http://localhost:80/api/auth/';
    constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
    httpOptions2 = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer' + ' ' + localStorage.getItem('TOKEN'),
        })
    };

    // HttpClient API login() method
    register($userDetails) {
        console.log(JSON.stringify($userDetails));
        // return JSON.stringify($userDetails);
        return this.http.post(this.apiURL + 'signup/', JSON.stringify($userDetails), this.httpOptions);
    }
    login($userDetails) {
        console.log(JSON.stringify($userDetails));
        // return JSON.stringify($userDetails);
        return this.http.post(this.apiURL + 'login/', JSON.stringify($userDetails), this.httpOptions);
    }
    logout(){
        return this.http.get(this.apiURL + 'logout', this.httpOptions2);
    }
    user() {
        return this.http.get(this.apiURL + 'user', this.httpOptions2);
    }
}

