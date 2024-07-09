import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/card/shared.module';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  exports: [TasksComponent],
  imports: [FormsModule, SharedModule, DatePipe],
})
export class TasksModule {}
