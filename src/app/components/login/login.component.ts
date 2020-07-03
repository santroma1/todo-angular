import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { emailValidator } from 'src/app/utils/util';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    error:string;
    success:string;
    form:FormGroup;
    showPass:boolean=false;

  constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private userService:UserServiceService) { }

  ngOnInit(): void {
      //Query Params
      this.error=this.route.snapshot.queryParamMap.get("error");
      this.success=this.route.snapshot.queryParamMap.get("success");

      //Params
      // const id=this.route.snapshot.paramMap.get("id");
      // console.log(id);

      this.form=this.createForm();
  }

  resetAlerts(){
      this.error="";
      this.success="";
  }

  createForm(){
      return this.fb.group({
          email:["", [emailValidator]],
          password:["", [Validators.required]]
      });
  }

  login({valid, value}:{valid:boolean, value:User}){
         if(valid){
            const user=this.userService.validateUser(value);
            this.userService.isAuthenticated = !!user.length;
            this.form.reset();
            if(user.length){
                this.error="";
                this.router.navigate(['todolist']);
            }else{
                this.success="";
                this.error="Invalid user";
            }
         }
     }

}
