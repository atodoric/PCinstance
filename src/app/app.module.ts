import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, 
    SearchComponent,
    ProductListComponent,
    CategoriesComponent,
    ProductCarouselComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
