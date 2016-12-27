import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,     
    ProductListComponent,
    CategoriesComponent,
    ProductCarouselComponent,
    HomeComponent,
    RegistrationComponent,
    CartComponent,
    LoginComponent,    
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
