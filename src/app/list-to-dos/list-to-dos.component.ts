import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: Todo[];
   //= [
  //   new Todo(1, 'Find a Job', false, new Date()),
  //   new Todo(2, 'Buy a House', false, new Date()),
  //   new Todo(3, 'Learn ALL the Code!', false, new Date())
    // { id: 1, description: 'Learn to Dance' },
    // { id: 2, description: 'Learn to Cook' },
    // { id: 3, description: 'Learn to Clean' }
 // ]

  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('amandaw').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

}
