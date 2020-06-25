import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "./../../components/todo-item/todo-item.component";
import { Todo } from 'src/app/interfaces/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todoList:Todo[] = [];

    constructor(private todoService:TodoServiceService) {  }

    getTodoList(){
        this.todoList = this.todoService.getTodos();
    }


    ngOnInit(): void {
        this.getTodoList();

    }

    deleteTodo(idToDelete:number){
        this.todoList = this.todoService.deleteTodo(idToDelete);
    }


}
