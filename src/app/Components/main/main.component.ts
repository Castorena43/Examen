import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth0: Auth0Service, public auth: AuthService, private route: Router ) { }

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
}
