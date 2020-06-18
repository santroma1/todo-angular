import { Component, OnInit } from '@angular/core';
import {TodoServiceService } from "./../../services/todo-service.service";
import {Todo} from "./../../interfaces/todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    todoList:Todo[] = [];

    constructor(private todoService:TodoServiceService) {  }

    getTodoList(){
        this.todoList = this.todoService.getTodos();
    }


    ngOnInit(): void {
        this.getTodoList();

    }

}
