import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../shared/api/user-api/rest-api.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userDetails: any = {};
    responseData: any = {};
    error: any = {};
    passwordConfirmation;

    constructor(public userApi: RestApiService) {
    }

    ngOnInit() {
    }

    registerWithData() {
        // return this.userApi.register(this.userDetails).subscribe(
        //     data => console.log(data),
        //     error => console.log(error)
        console.log(this.passwordConfirmation);
        return this.userApi.register(this.userDetails).subscribe(
            data => {
                this.responseData = data;
                window.alert(this.responseData.message);
            },
            error => {

                this.error.name = error.error.errors.name;
                this.error.email = error.error.errors.email;
                this.error.password = error.error.errors.password;
                console.log(this.error);
            }
            );
    }
}
