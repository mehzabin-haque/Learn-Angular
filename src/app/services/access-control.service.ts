import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  loggedInUser:User = new User();

  constructor(private userService:UserService) { }

  setLoggedInUser(username:string){
    const userList = this.userService.getUserInfo();
    for(let i=0;i<userList.length;i++){
      if(userList[i].username==username){
        this.loggedInUser = userList[i];
        break;
      }
    }
  }

  getLoggedInUser():User{
    return this.loggedInUser;
  }
  logout(){
    this.loggedInUser = new User();
  }
}
