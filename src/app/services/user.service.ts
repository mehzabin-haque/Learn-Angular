import { Injectable } from '@angular/core';
import { User } from './../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user_info: User[] = [
    {username:"stu123",password:"123",age:23,email:"a@gmail.com ",role:"BUYER"},
    {username:"stu456",password:"456",age:23,email:"b@gmail.com ",role:"SELLER"},
  ]

  constructor() { }

  getUserInfo():User[]{
    return this.user_info;
  }

  addUser(username:string,password:string,email:string,age:number,role:string){
    this.user_info.push({username:username,password:password,email:email,age:age,role:role});
  }

  authentication(username:string,password:string): boolean{
    for(let i=0;i<this.user_info.length;i++){
      if(this.user_info[i].username==username && this.user_info[i].password==password){
        alert("Login Successful");
        return true;
      }
    }
    alert("Login Failed");
    return false;
  }
}
