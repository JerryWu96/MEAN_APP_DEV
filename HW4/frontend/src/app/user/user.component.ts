import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  newUser: User = {
    name: '',
    favorite: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.users.push(this.newUser);
    this.newUser = {
      name: '',
      favorite: ''
    };
  }

}
