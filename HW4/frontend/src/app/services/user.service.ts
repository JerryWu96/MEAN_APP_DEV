import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { USERS } from '../shared/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
