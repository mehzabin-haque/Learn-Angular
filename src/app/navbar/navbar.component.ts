import { Component, OnInit } from '@angular/core';
import { AccessControlService } from '../services/access-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor(private accessControlService:AccessControlService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  whichRole():string{
    return this.accessControlService.getLoggedInUser().role;
  }

}
