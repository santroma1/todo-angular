import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { passwordMessage } from 'src/app/utils/errorMessages';
import { emailValidator, strongPassword, passwordMatch } from 'src/app/utils/util';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService: UserServiceService, private router:Router, private route:ActivatedRoute) { }

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
          password:[""/*, strongPassword*/],
          confirmPassword:[""]
      },{
          validators: [passwordMatch]
      });
  }

  addUser(){
      console.log(this.form.valid);
    if(this.form.valid){
            const user = new User({
                name:this.form.value.name,
                email:this.form.value.email,
                password:this.form.value.password
            })
            this.userService.addNewUser(user);
            this.form.reset();
        }

    }

    back(){
        this.router.navigate(['login'],{
            queryParams:{error:"an error occured"}
        })
    }

}
