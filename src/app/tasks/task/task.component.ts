import { Component, input } from '@angular/core';
import { Task } from '../dummy-tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private taskService: TaskService) {}
  userId = input.required<string>();
  task = input.required<Task>();
  completeTask(id: string) {
    this.taskService.removeTask(id);
  }
}
