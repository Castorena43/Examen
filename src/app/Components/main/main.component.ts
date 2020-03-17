import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public auth0: Auth0Service, public auth: AuthService ) { }

  ngOnInit(): void {
  }

}
