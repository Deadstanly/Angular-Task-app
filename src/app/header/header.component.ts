import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {UiService} from "../services/ui.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task App'
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(data => this.showAddTask = data)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
