import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../../shared/api/product-api/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    Product: any = [];
    id = this.actRoute.snapshot.params['id'];

    constructor(
        public restApi: RestApiService,
        public actRoute: ActivatedRoute,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.getProductById();
    }

// Get one product
    getProductById() {
        return this.restApi.getProductId(this.id).subscribe(
            data => {
                this.Product.name = data.name;
                this.Product.image_links = data.image_links;
                this.Product.price = data.price;
                this.Product.description = data.description;
            },
            error => {

            }
        );
    }




}
