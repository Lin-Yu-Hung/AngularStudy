import { Component, input } from '@angular/core';
import { Task } from '../dummy-tasks';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  imports: [DatePipe, CardComponent]
})
export class TaskComponent {
  constructor(private taskService: TaskService) { }
  userId = input.required<string>()
  task = input.required<Task>()
  completeTask(id: string) {
    this.taskService.removeTask(id)
  }
}