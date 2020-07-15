import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { HttpClient } from "@angular/common/http";
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errors } from '../utils/errorMessages';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
    lastId :number;

  constructor(private http:HttpClient) {
   }



  // getTodos(){
  //     return this.todoList;
  // }

  getTodos():Observable<Todo[]>{
      return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos").pipe(
        catchError(this.handleError<Todo[]>('MainService -> getTodoList', []))
      );;
  }

  getTodoListByFilter(value: string): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params: {
        completed: value
      }
    });
  }

  createTodoItem(todo: Todo): Observable<Todo> {
      return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
    }

    updateItem(todo: Todo): Observable<Todo> {
      return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo).pipe(
        catchError(this.handleError<Todo>('MainService -> updateItem', todo))
      );
    }

    deleteItem(todoId: string | number): Observable<Todo> {
      return this.http.delete<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);

        console.warn(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }


  // addNewTodo(newTodo: Todo){
  //     if(this.todoList.length){
  //         this.lastId = +this.todoList[this.todoList.length - 1].id;
  //     }
  //     if(!newTodo.id){
  //         newTodo.id = ++this.lastId;
  //     }
  //     //console.log(newTodo);
  //     this.todoList.push(newTodo);
  // }
  //
  // deleteTodo(id:number){
  //     this.todoList = this.todoList.filter((todo) => {
  //         return todo.id !== id;
  //     });
  //     //console.log(this.todoList)
  //     return this.todoList;
  // }
  //
  // updateTodo(updatedTodo:Todo){
  //     this.todoList = this.todoList.map((todo) => {
  //          if(todo.id === updatedTodo.id){
  //              return updatedTodo;
  //          }else{
  //              return todo;
  //          }
  //     });
  //     return this.todoList;
  // }


}
