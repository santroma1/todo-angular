import { Component, OnInit } from '@angular/core';
import { NgModel, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";

import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces/todo';
import { emailValidator, passwordMatch, strongPassword } from './../../utils/util';
import { errors, passwordMessage} from "./../../utils/errorMessages"

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

    passwordError = passwordMessage;
    form:FormGroup;

  constructor(
      private todoService:TodoServiceService,
      private fb:FormBuilder
  ){ }

  createForm(){
      return this.fb.group({
          title:"",
          task: ["", [Validators.minLength(3), Validators.required]],
          email:["", emailValidator],
          password:["", strongPassword],
          confirmPassword:[""]
      },{
          validators: [passwordMatch]
      });
  }

  addNewTask(){
      console.log(this.form, this.form.get("password"))
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

  get email():AbstractControl{
      return this.form.get("email");
  }

  get task():AbstractControl{
      return this.form.get("task");
  }

  get password():AbstractControl{
      return this.form.get("password");
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
