import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserTask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: UserTask;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService);

  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }
}
