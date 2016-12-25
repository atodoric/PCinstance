import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent }, 
  { path: 'cart',  component: CartComponent }, 
  { path: 'registration',  component: RegistrationComponent }, 
  { path: 'login',  component: LoginComponent }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
