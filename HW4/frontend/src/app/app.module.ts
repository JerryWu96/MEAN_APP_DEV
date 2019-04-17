import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';

import { BooksService } from './services/books.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BooksService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
