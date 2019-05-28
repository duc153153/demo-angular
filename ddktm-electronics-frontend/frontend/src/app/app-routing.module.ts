import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './layout/admin-layout/product-list/product-list.component';
import {HomeComponent} from './layout/home/home.component';
import {UserManageComponent} from './layout/user-manage/user-manage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { ProductDetailsComponent } from "./layout/product-details/product-details.component";


import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {AdminLayoutComponent}  from './layout/admin-layout/admin-layout.component'



import {AppHeaderComponent} from './layout/app-header/app-header.component';

const routes: Routes = [
    //app routes
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'product-details/:id', component: ProductDetailsComponent},
            {path: 'product-details', component: ProductDetailsComponent}
        ]
    },

    //admin routes
    {
        path:'',
        component: AdminLayoutComponent,
        children: [
            {path: 'product-list', component: ProductListComponent},
            {path: 'user-manage', component: UserManageComponent},
        ]
    },


    //no layout
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
