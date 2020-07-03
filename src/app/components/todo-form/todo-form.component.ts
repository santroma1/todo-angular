import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";

import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces/todo';
import { errors } from "./../../utils/errorMessages"

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

    form:FormGroup;

  constructor(
      private todoService:TodoServiceService,
      private fb:FormBuilder
  ){ }

  createForm(){
      return this.fb.group({
          task: ["", [Validators.minLength(3), Validators.required]],

      });
  }

  addNewTask(){
      console.log(this.form.valid);
      if(this.form.valid){
          //console.log(this.form)
          const todo = new Todo({
              task:this.form.value.task
          })
          this.todoService.addNewTodo(todo);
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


  get task():AbstractControl{
      return this.form.get("task");
  }


  getErrorMessage(control:AbstractControl){
      for(const propertyErrorName in control.errors){
          if(control.errors.hasOwnProperty(propertyErrorName)){
              return errors[propertyErrorName];
          }
      }
      return null;
  }



}
