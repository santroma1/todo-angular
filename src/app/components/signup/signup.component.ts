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
  showPass=false;
  showConfirmPass=false;

  ngOnInit(): void {
      this.form = this.createForm();
  }

  get password():AbstractControl{
      return this.form.get("password");
  }

  get confirmPassword(): AbstractControl{
      return this.form.get("confirmPassword");
  }

  get email():AbstractControl{
      return this.form.get("email");
  }

  get name():AbstractControl{
      return this.form.get("name");
  }

  canDeactivate(){
      if(this.form.dirty || this.form.touched){
          return window.confirm("Are you already want to leave this page?");
      }
      return true;
  }

  createForm(){
      return this.fb.group({
          name:["", Validators.required],
          email:["", [emailValidator]],
          password:["", [Validators.required/*, strongPassword*/]],
          confirmPassword:["", [Validators.required]]
      },{
          validators: [passwordMatch]
      });
  }

  addUser({valid, value}: {valid:boolean, value:User}){
      console.log(valid);
    if(valid){
            const data = this.userService.addNewUser(value);
            this.form.reset();
            this.router.navigate(['login'],{
                queryParams:data
            });
        }

    }


}
