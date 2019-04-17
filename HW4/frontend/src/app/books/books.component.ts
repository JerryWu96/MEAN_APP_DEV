import { Component, OnInit } from '@angular/core';

import { Books } from '../shared/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = {
    title1: '',
    title2: '',
    title3: ''
  };

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
      });
  }

}
