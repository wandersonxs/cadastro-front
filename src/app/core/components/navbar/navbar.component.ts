import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
     return this.authService.isAuthenticated();
  }

  logout() {
    // this.authService.logout();
  }

}
