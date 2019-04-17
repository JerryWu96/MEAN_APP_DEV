import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Books } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3000/hw4/';

  getBooks(): Observable<Books> {
    return this.http.get<Books>(this.URL);
  }
}
