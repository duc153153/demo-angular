import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';

const TOKEN = 'TOKEN';
@Injectable({
    providedIn: 'root'
})


export class UserService {
    apiURL = 'http://localhost:80/api/';

    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    };

    show($currentPage): Observable<User> {
        return this.http.get<User>(this.apiURL + 'users?page=' + $currentPage);
    }

    find($id): Observable<User> {
        return this.http.get<User>(this.apiURL + 'users/' + $id);
    }

    create($user): Observable<User> {
        return this.http.post<User>(this.apiURL + 'users', JSON.stringify($user), this.httpOptions);
    }

    update($id, $user): Observable<User> {
        return this.http.put<User>(this.apiURL + 'users/' + $id, JSON.stringify($user), this.httpOptions);
    }

    setToken(token: string) :void {
        localStorage.setItem(TOKEN, token);
    }

    isLogged() {
        return localStorage.getItem(TOKEN) != null;
    }
}
