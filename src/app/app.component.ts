import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS, User } from '../app/user/dummy-user'

@Component({
  selector: 'app-root', // 用於決定元件的標籤名稱  使用上<app-root />
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = JSON.parse(JSON.stringify(DUMMY_USERS))
  selectUser: User | undefined
  onSelectUser(user: User) {
    this.selectUser = JSON.parse(JSON.stringify(user))
  }
}
