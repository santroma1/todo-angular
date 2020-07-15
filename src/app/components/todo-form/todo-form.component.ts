import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";

import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces/todo';
import { errors } from "./../../utils/errorMessages"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnDestroy {

    form:FormGroup;
    sub:Subscription;

  constructor(
      private todoService:TodoServiceService,
      private fb:FormBuilder
  ){ }

  createForm(){
      return this.fb.group({
          title: ["", [Validators.minLength(3), Validators.required]],
          userId:11,
          completed:[false]
      });
  }

  addNewTask(){
      console.log(this.form.valid);
      if(this.form.valid){
          //console.log(this.form)
          const todo = new Todo({
              title:this.form.value.title
          })
          this.todoService.createTodoItem(todo).subscribe(data =>console.log(data));
          this.form.reset();
      }
  }


  ngOnInit(): void {
      this.form = this.createForm();
      // this.form.setValue({
      //     title:"TITLE",
      //     task:"HELLO",
      //     email:"Santroma1@gmail.com"
      // })
  }


  get title():AbstractControl{
      return this.form.get("title");
  }


  getErrorMessage(control:AbstractControl){
      for(const propertyErrorName in control.errors){
          if(control.errors.hasOwnProperty(propertyErrorName)){
              return errors[propertyErrorName];
          }
      }
      return null;
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }



}
