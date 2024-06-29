import { Component, Output, EventEmitter, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../dummy-tasks';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  constructor(private taskService: TaskService) { }
  userId = input.required<string>()
  tasksLen = input.required<number>()
  title = signal<string>('')
  summary = signal<string>('')
  dueDate = signal<string>('')
  @Output() closeModal = new EventEmitter<void>();
  cancelCreate() {
    this.closeModal.emit()
  }
  createTask() {
    const data: Task = {
      id: `t${this.tasksLen() + 1}`,
      title: this.title(),
      userId: this.userId(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    }
    this.taskService.addTasks(data)
    this.cancelCreate();
  }
}
