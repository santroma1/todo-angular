import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {



    @Input() todoItem:Todo;
    @Output() deleteEvent = new EventEmitter();

    constructor(private todoService:TodoServiceService) {  }

    ngOnInit(): void {

    }



    isDone(){
        return this.todoItem.completed;
    }

    changeClass(){
        this.todoItem.completed = !this.todoItem.completed;
    }

}
