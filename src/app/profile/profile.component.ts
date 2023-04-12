import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessControlService } from '../services/access-control.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private accessControlService: AccessControlService ,private router:Router) { }

  logout(){
    this.accessControlService.logout();
    this.router.navigate(['/home']);
  }
}
