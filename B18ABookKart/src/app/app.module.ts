import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishListService } from './wishlist.service';
import { ApiService } from './apiservice.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookListComponent,
    WishListComponent,
    HeaderComponent,
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    HttpClientModule,
    FormsModule

  ],
  providers: [WishListService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
