import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { passwordMessage } from 'src/app/utils/errorMessages';
import { emailValidator, strongPassword, passwordMatch } from 'src/app/utils/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  passwordError = passwordMessage;
  form:FormGroup;

  ngOnInit(): void {
      this.form = this.createForm();
  }

  get password():AbstractControl{
      return this.form.get("password");
  }

  get email():AbstractControl{
      return this.form.get("email");
  }

  get name():AbstractControl{
      return this.form.get("name");
  }

  createForm(){
      return this.fb.group({
          name:["", Validators.required],
          email:["", emailValidator],
          password:["", strongPassword],
          confirmPassword:[""]
      },{
          validators: [passwordMatch]
      });
  }

  addUser(){
      console.log(this.form.valid);
    return this.form.valid;
  }

}
