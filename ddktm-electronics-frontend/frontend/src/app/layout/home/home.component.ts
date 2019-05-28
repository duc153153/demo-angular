
import { Component, OnInit } from '@angular/core';
import { SecretProductService } from 'src/app/shared/api/secret-product-api/secret-product.service';
import { BrandApiService } from 'src/app/shared/api/brand-api/brand-api.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    Product: any = [];
    error_message;
    convert_data;
    page_actual: number = 1;
    array_total_page;
    total_page;
    Brand: any = {};
    current_user = JSON.parse(localStorage.getItem('current_user'));

    constructor(public secretProductApi: SecretProductService) {
    }



    ngOnInit() {
        this.loadProducts(this.page_actual);
    }

    loadProducts($page_actual) {
        return this.secretProductApi
            .getProduct($page_actual)
            .subscribe(
                data => {
                    this.convert_data = data;

                    // gen array with key from number!
                    this.array_total_page = Array.from(Array(this.convert_data.meta.last_page).keys());
                    this.total_page = this.convert_data.meta.last_page;
                    this.Product = this.convert_data.data;

                    console.log(this.Product);
                },
                error => this.error_message = error
            );
    }
    previous_page() {



        if ($number => 1) {
            this.page_actual -= 1;
            this.loadProducts(this.page_actual);
        }
        this.page_actual = 1;
    }

    currentPage($number: number) {
        this.page_actual = $number + 1;
        this.loadProducts(this.page_actual);
    }

    nextPage() {
        console.log(this.page_actual + ' ' + this.total_page)
        if (this.page_actual < this.total_page) {
            this.page_actual += 1;
            this.loadProducts(this.page_actual);
        }
    }


}
