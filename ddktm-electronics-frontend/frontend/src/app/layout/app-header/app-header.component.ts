import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../../shared/api/user-api/rest-api.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
    responseData: any = {};
    users: any = [];

    constructor(
        private restApiService: RestApiService,
    ) {
    }

    ngOnInit() {
        this.profile();
    }

    logout() {
        // remove user from local storage to log user out
        this.restApiService.logout().subscribe(
            data => {
                this.responseData = data;
                console.log(this.responseData);

            },
            error => {
                console.log(error);
            }
        );
    }

    profile() {
        this.restApiService.user().subscribe(
            data => {
                this.responseData = data;
                console.log(this.responseData);
                this.users = this.responseData.name;
            },
            error => {
                console.log(error);
                this.users = null;
            }
        );
    }


}
