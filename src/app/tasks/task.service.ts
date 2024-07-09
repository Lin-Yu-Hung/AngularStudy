import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  getAllTasks(): Task[] {
    return this.tasks;
  }
  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }
  getTasksLen(): number {
    return this.tasks.length;
  }
  addTasks(task: Task) {
    this.tasks.unshift(task);
    this.saveData();
  }
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveData();
  }
}
