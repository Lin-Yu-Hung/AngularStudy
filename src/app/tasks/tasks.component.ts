import { Component, input, computed } from '@angular/core';
import { User } from '../user/dummy-user';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  userInfo = input.required<User>()
  showData = computed((): User => this.userInfo())
}
