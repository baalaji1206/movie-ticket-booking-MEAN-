import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: null | any;
  isAuthenticated: boolean | any;
  authService: any;

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

 
}
