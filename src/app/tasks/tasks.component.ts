import { Component, OnInit } from '@angular/core';
import {ITask} from "../models/itask";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task).subscribe();
    window.location.reload()

  }

  onToggle(task: ITask) {
    task.reminder = !task.reminder;
  }


  addTask(task: ITask) {
   this.taskService.addTask(task).subscribe(data => this.tasks.push(task))
  }
}
