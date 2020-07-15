import { Component, OnInit, ChangeDetectorRef, AfterContentInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { TabComponent } from '../tab/tab.component';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild("allTodos") allTodos: ElementRef;
    todoList:Todo[] = [];
    todoListAsync:Observable<Todo[]>;
    tabs:string[] = ["All", "Completed", "Pending"];
    filterBy: string="All";
    sub : Subscription[]=[];

    constructor(private todoService:TodoServiceService,
                private cd:ChangeDetectorRef
    ) {  }

    ngOnInit(): void {
        this.getTodoList();

    }

    ngAfterViewInit(){
        //Demostrativo
        //console.log(this.allTodos);
    }


     ngAfterContentInit(): void {
         this.cd.detectChanges();
     }


    // getTodoList(){
    //     this.todoList = this.todoService.getTodos();
    // }

    getTodoList(){
        this.todoListAsync = this.todoService.getTodos();
    }

    getTodoListFiltered(value){
        const filter = (value === "Completed") ? true: false;
        this.todoListAsync = this.todoService.getTodoListByFilter(`${filter}`)
    }


    deleteTodo(idToDelete:number){
          this.sub.push(this.todoService.deleteItem(idToDelete).subscribe());
    }

    updateTodoList(todo:Todo){
        this.sub.push(this.todoService.updateItem(todo).subscribe());
    }

    onChangeTab(currentTab:TabComponent){
        if (currentTab.title === 'Completed' || currentTab.title === 'Pending') {
          this.getTodoListFiltered(currentTab.title);
        } else {
          this.getTodoList();
        }
    }

    ngOnDestroy(){
        this.sub.forEach(s => s.unsubscribe());
    }

}
