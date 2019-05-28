
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ProductListComponent} from './layout/admin-layout/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {ProductDetailsComponent} from './layout/product-details/product-details.component';

import {HomeComponent} from './layout/home/home.component';
import {UserManageComponent} from './layout/user-manage/user-manage.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';

import { StoreModule } from '@ngrx/store';
// import { UserReducer } from './shared/store/reducer/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    UserManageComponent,
    LoginComponent,
    RegisterComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    ProductDetailsComponent,
   
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
