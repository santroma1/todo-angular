import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
    private todoList:Todo[];
    lastId :number;

  constructor() {
   }


   getTodoList(){
       return this.todoList;
   }

  getTodos(){
      this.todoList = [
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
      ]

      return this.todoList;
  }


  addNewTodo(newTodo: Todo){
      if(this.todoList.length){
          this.lastId = +this.todoList[this.todoList.length - 1].id;
      }
      if(!newTodo.id){
          newTodo.id = ++this.lastId;
      }
      console.log(newTodo);
      this.todoList.push(newTodo);
  }

  deleteTodo(id:number){
      this.todoList = this.todoList.filter((todo) => {
          return todo.id !== id;
      });
      console.log(this.todoList)
      return this.todoList;
  }



}
