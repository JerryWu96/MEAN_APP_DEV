import { Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'users', component: UserComponent}
];
