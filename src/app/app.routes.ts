import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { myguardGuard } from './myguard.guard';

export const routes: Routes = [
    {path:'' ,redirectTo:'/login' ,pathMatch:'full'},
    {path:'home' ,component:HomeComponent,canActivate:[myguardGuard]},
    {path:'category' , component:CategoryComponent,canActivate:[myguardGuard]},
    {path:'products/:category',component:ProductsComponent,canActivate:[myguardGuard]},
    {path:'singleProduct/:id',component:SingleProductComponent,canActivate:[myguardGuard]},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
];
