import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import {HttpClientModule} from "@angular/common/http";
import { AddTaskComponent } from './add-task/add-task.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
