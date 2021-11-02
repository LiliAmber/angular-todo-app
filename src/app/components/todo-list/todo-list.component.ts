import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []
  @Output() newEditTodoEvent = new EventEmitter()
  editTodo: string = ''

  constructor() { }

  //==sama kaya created di vue==
  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        completed: false
      },
      {
        content: "Second Todo",
        completed: false
      },
      {
        content: "Third Todo",
        completed: false
      },
      {
        content: "Fourth Todo",
        completed: false
      },
      {
        content: "Fifth Todo",
        completed: false
      },
      
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if(i === id) {
        v.completed = !v.completed
      }
      // console.log(v)
      return v
    })
  }

  deleteTodo(id: number) {
    // console.log(id, "id delete")
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos = this.todos.filter((v, i) => i !== id)
        Swal.fire(
          'Deleted!',
          'Your Todo has been deleted.',
          'success'
        )
      }
    })
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  
  editTodoTrigger(todo: Todo) {
    todo.editing = true
    console.log("aku di klik")
  }

  updateTodo(updTodo: Todo) {
    if(this.editTodo) {
      updTodo.content = this.editTodo
      updTodo.completed = false
      updTodo.editing = false

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your todo has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'todo cant be empty',
      })
    }
    this.newEditTodoEvent.emit(updTodo)
    this.editTodo = ''
  }
}
