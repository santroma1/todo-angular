import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  getTodos(){
      return[
          {
              id:"1",
              task:"Have a class",
              completed:false
          },
          {
              id:"2",
              task:"Attend the meeting",
              completed:true
          },
          {
              id:"3",
              task:"Finish Todo App",
              completed:false
          }
      ]
  }

}
