import { Component, Input, input } from '@angular/core';
import { Task } from './task/task';
import { UserTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() userId?: string;
  @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!:string;
  // name = input.required<string>();

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTask() {
    return this.tasks.filter((task: any) => {
      if (task.userId === this.userId) {
        return task;
      }
    })!;
  }

  onCompleteTask(taskId: string) {
    console.log('task id to delete : ', taskId);
    this.tasks = this.tasks.filter((task: any) => {
      if (task.id === taskId) {
        return task;
      }
    });
  }
}
