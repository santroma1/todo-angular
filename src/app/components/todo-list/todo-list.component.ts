import { Component, OnInit, ChangeDetectorRef, AfterContentInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, AfterContentInit, AfterViewInit {

    @ViewChild("allTodos") allTodos: ElementRef;
    todoList:Todo[] = [];
    tabs:string[] = ["All", "Completed", "Pending"];
    filterBy: string="All";

    constructor(private todoService:TodoServiceService,
                private cd:ChangeDetectorRef
    ) {  }

    ngAfterViewInit(){
        //Demostrativo
        //console.log(this.allTodos);
    }


    ngAfterContentInit(): void {
        this.cd.detectChanges();
    }


    getTodoList(){
        this.todoList = this.todoService.getTodos();
    }


    ngOnInit(): void {
        this.getTodoList();

    }

    deleteTodo(idToDelete:number){
        this.todoList = this.todoService.deleteTodo(idToDelete);
    }

    updateTodoList(todo:Todo){
        this.todoList = this.todoService.updateTodo(todo);
    }

    onChangeTab(currentTab:TabComponent){
        this.filterBy = currentTab.title;
        this.getTodoList();
    }

}
