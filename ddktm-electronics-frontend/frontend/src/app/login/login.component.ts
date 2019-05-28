import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {UserService} from '../shared/api/user-api/user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    private rest: any;
    userDetails: any = {};
    responseData: any = {};
    error: any = {};

    constructor(
        private router: Router,
        public authService: AuthenticationService,
        private user: UserService) {
    }

    ngOnInit() {
    }

    loginWithData() {
        return this.authService.login(this.userDetails).subscribe(
            data => {
                this.responseData = data;
                console.log(this.responseData);
                // window.alert(this.responseData.message);
                this.user.setToken(this.responseData.access_token);
                this.router.navigateByUrl('/');
            },
            error => {
                this.error.email = error.error.errors.email;
                this.error.password = error.error.errors.password;
                this.responseData = error;
                console.log(error);
                window.alert(this.responseData.message);
            }
        );
    }

}
