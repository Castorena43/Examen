import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';
import { AuthService1 } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  loggedIn: boolean;

  constructor(public auth0: Auth0Service, public auth: AuthService1, private route: Router, public authg: AuthService ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this.route.navigate( ['/login'] );
  }
  logout_Auth0() {
    this.auth0.logout();
    this.route.navigate( ['/login'] );
  }
  logout_Google() {
    this.authg.signOut();
    this.route.navigate( ['/login'] );
  }
  status() {
    this.authg.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (this.user != null);
      return this.loggedIn;
    });
  }
}
