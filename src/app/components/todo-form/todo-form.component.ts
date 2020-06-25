import { Component, OnInit } from '@angular/core';
import { NgModel, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";

import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces/todo';

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
          title:"",
          task: ["", [Validators.maxLength(5), Validators.required]],
          email:["", emailValidator],
          password:[""],
          confirmPassword:[""]
      },{
          validators: [passwordMatch]
      });
  }

  addNewTask(){
      console.log(this.form, this.form.get("task"))
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

  getErrorMessage(control:AbstractControl){
      for(const propertyErrorName in control.errors){
          if(control.errors.hasOwnProperty(propertyErrorName)){
              const errors = {
                  required:"This field is required",
                  maxLength:"The min length is not met"
              };
              return errors[propertyErrorName];
          }
      }
      return null;
  }


}

function emailValidator(control: FormControl):{emailInvalid:boolean} | null{
    const {value} = control;
    const EMAIL_REGEX = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    return EMAIL_REGEX.test(value) ? null :{
        emailInvalid:true
    };
}

function passwordMatch(form:FormGroup): {notequal:boolean} | null{
    const password = form.get("password").value;
    const confirmPassword = form.get("confirmPassword").value;
    return password === confirmPassword ? null :{
        notequal:true
    };
}
