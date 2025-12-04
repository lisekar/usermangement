import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './constant/dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('usermanagement');
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser() {
    return this.users.find((user: any) => {
      if (user.id === this.selectedUserId) {
        return user;
      }
    });
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('data : ', id);
  }
}
