import { Component, input, computed, inject } from '@angular/core';
import { User } from '../user/dummy-user';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/card/card.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TaskComponent, NewTaskComponent, CardComponent]
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
