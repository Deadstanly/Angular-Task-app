import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITask} from "../models/itask";
import {UiService} from "../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(data => this.showAddTask = data)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!!!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = '';
    this.day = '';
  }

}
