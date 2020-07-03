import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    _isAuthenticated:boolean;

    private userList:User[] = [
        {
            name:"Santiago",
            email:"santiago@gmail.com",
            password:'123'
        }
    ];

  constructor() { }

  get isAuthenticated(){
      return this._isAuthenticated;
  }

  set isAuthenticated(auth:boolean){
      this._isAuthenticated = auth;
  }

  addNewUser(newUser:User){
      const userExists = this.getUser(newUser).length;
      if(!userExists){
          console.log(this.userList)
          this.userList.push(newUser);
          return {success:"User created succesfully"};
      }else{
          const msg = (userExists)? "User already exists" : "There was a problem and the user cant be created";
          return {error:msg};
      }


  }

    getUser(user:User){
      return this.userList.filter((data) => data.email === user.email);
  }

  validateUser(user){
      return this.getUser(user).filter((data=>data.password === user.password));
  }

}
