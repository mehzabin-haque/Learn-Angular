import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = "";
  password: string = "";
  email: string = "";
  age:number = 0;
  role:string = "";

  constructor(private userService: UserService, private router:Router){}
  registerNewUser(){
    this.userService.addUser(this.username, this.password, this.email, this.age, this.role);
    this.router.navigate(['/profile']);
  }
  
  test(){
    const users = this.userService.getUserInfo();
    for(let i=0; i<users.length; i++){
      console.log(users[i].username);
    }
  }
}
