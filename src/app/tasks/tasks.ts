import { Component, Input, input } from '@angular/core';
import { Task } from './task/task';
import { type newTaskData, UserTask } from './task/task.model';
import { NewTask } from './new-task/new-task';
import {TaskService}from './task.service'
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!:string;
  // name = input.required<string>();
  isAddngTask: boolean = false;
  constructor(private task:TaskService){}

 
  get selectedUserTask() {
    return this.task.getUserTask(this.userId)
  }

  onCompleteTask(taskId: string) {
    console.log('task id to delete : ', taskId);
    // this.tasks = this.tasks.filter((task: any) => {
    //   if (task.id === taskId) {
    //     return task;
    //   }
    // });
  }
  onStartAddTask() {
    this.isAddngTask = true;
  }
  onCloseAddTask(event: void) {
    this.isAddngTask = false;
  }
  // onAddTask(taskData: newTaskData) {
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date,
  //   // });
  //   this.isAddngTask = false;
  // }
}
