import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService1 } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth0Service } from 'src/app/services/auth0.service';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  usuario: User;
  constructor(private auth: AuthService1, private route: Router, public auth0: Auth0Service, private authService: AuthService ) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      'password': new FormControl('', Validators.required)
    });
  }

  login() {
    if (this.forma.valid){
      this.usuario = this.forma.value;
      this.auth.login(this.usuario).subscribe( (data: any) => {
        this.route.navigate( ['main', 'marvel'] );
      },
      error => this.alert('error', 'Error', 'No se pudo iniciar sesion')
      );
    } else {
      this.forma.markAllAsTouched();
    }

  }

  alert(icon: any, title: any, msg: any): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: msg
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}

export interface User {
  email: string;
  password: string;
}
