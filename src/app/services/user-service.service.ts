import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

    private userList:User[] = [];

  constructor() { }

  addNewUser(newUser:User){
      this.userList.push(newUser);
      console.log(this.userList.length)
  }

}
