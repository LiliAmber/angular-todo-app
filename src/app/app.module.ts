import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    AddTodoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
