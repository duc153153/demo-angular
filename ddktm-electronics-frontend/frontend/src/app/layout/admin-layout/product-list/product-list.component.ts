import { Component, OnInit } from '@angular/core';
import { ProductApiService } from "../../../shared/api/product-api/product-api.service";
import { Product } from 'src/app/shared/models/product/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: any = [];
  product_id: any = [];
  convert_data: any = {};
  product_data: any = {};
  notification: any;
  add_or_update;
  err: any = {};
  page_actual: number = 1;
  array_total_page;
  total_page;

  constructor(
    public ProductApi: ProductApiService

  ) { }
  ngOnInit() {
    this.loadProducts(this.page_actual)
  }
  // Get Products list
  loadProducts($page_number) {
    return this.ProductApi.getProduct($page_number).subscribe((data) => {
      // gen array with key from number!
      this.convert_data = data
      this.array_total_page = Array.from(Array(this.convert_data.last_page).keys())
      this.total_page = this.convert_data.last_page
      this.product = this.convert_data.data
      console.log(data);
    })
  }
  getProduct(id: number) {
    return this.ProductApi.getProductId(id).subscribe((data) => {
      this.product_id = data;
    })
  }
  updateProduct(id: number) {
    //format date with yyyy/MM/dd
    const datenow = new Date();
    const format_date = datenow.getFullYear() + '-' + (datenow.getMonth() + 1) + '-' + datenow.getDate()
    this.product_id.updated_at = format_date;
    console.log(this.product_id.updated_at);
    this.ProductApi.updateProduct(this.product_id.id, this.product_id).subscribe(
      data => {
        this.notification = data;
        this.loadProducts(this.page_actual);
      },
      error => {
        this.err.image_links = error.error.errors.image_links;
        this.err.quantity = error.error.errors.quantity;
        this.err.name = error.error.errors.name;
        this.err.price = error.error.errors.price;
        console.log(error);
      }
    );
  }
  createProduct(product_data) {
    this.ProductApi.addProduct(this.product_data).subscribe(
      data => {
        this.notification = data;
        this.loadProducts(this.page_actual);
      },
      error => {
        this.err.image_links_create = error.error.errors.image_links;
        this.err.quantity_create = error.error.errors.quantity;
        this.err.name_create = error.error.errors.name;
        this.err.price_create = error.error.errors.price;
        console.log(error);
        console.log(this.err)
      }
    );
  }
  deleteProduct(id: number) {
    console.log(id);
    if (window.confirm('Are you sure, you want to delete?' + id)) {
      this.ProductApi.delProduct(id).subscribe(data => {
        this.loadProducts(this.page_actual);
        console.log(data)
      }, error => {
        console.log(error.error.message)
      })
    }
  }
  editProduct(id: number) {
    console.log(id);
  }
  previous_page() {
    if ($number => 1) {
      this.page_actual -= 1;
      this.loadProducts(this.page_actual);
    }
    this.page_actual = 1;
  }

  current_page($number: number) {
    this.page_actual = $number + 1;
    this.loadProducts(this.page_actual);
  }

  next_page() {
    console.log(this.page_actual + ' ' + this.total_page)
    if (this.page_actual < this.total_page) {
      this.page_actual += 1;
      this.loadProducts(this.page_actual);
    }
  }


}


