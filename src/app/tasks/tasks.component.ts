import { Component, input, computed, inject } from '@angular/core';
import { User } from '../user/dummy-user';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private taskService = inject(TaskService)
  // constructor(private taskService: TaskService) { }
  onAddingTask: boolean = false;
  tasksLen = this.taskService.getTasksLen();
  userInfo = input.required<User>()
  showData = computed((): User => this.userInfo())
  get userTasks() {
    return this.taskService.getUserTasks(this.userInfo().id)
  }
  createTask() {
    this.onAddingTask = true
  }
}
