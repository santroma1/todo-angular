import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
    private todoList:Todo[] = [
        {
            id:1,
            task:"Have a class",
            completed:false
        },
        {
            id:2,
            task:"Attend the meeting",
            completed:true
        },
        {
            id:3,
            task:"Finish Todo App",
            completed:false
        }
    ];

private filteredList: BehaviorSubject<Todo[]>= new BehaviorSubject([]);



    lastId :number;

  constructor() {
   }



  getTodos(){
      return this.todoList;
  }


  addNewTodo(newTodo: Todo){
      if(this.todoList.length){
          this.lastId = +this.todoList[this.todoList.length - 1].id;
      }
      if(!newTodo.id){
          newTodo.id = ++this.lastId;
      }
      //console.log(newTodo);
      this.todoList.push(newTodo);
  }

  deleteTodo(id:number){
      this.todoList = this.todoList.filter((todo) => {
          return todo.id !== id;
      });
      //console.log(this.todoList)
      return this.todoList;
  }

  updateTodo(updatedTodo:Todo){
      this.todoList = this.todoList.map((todo) => {
           if(todo.id === updatedTodo.id){
               return updatedTodo;
           }else{
               return todo;
           }
      });
      return this.todoList;
  }


}
