import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Components/login/login.component';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) { this.readToken(); }

  login(data: User) {
    return this.http.post(environment.apiBaseURL + 'api/user/login', data).pipe(
      map( respuesta => {
        this.token = respuesta['token'];
        localStorage.setItem('token', respuesta['token']);
      })
    );
  }

  register(data: any) {
    return this.http.post(environment.apiBaseURL + 'api/user/register', data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isloggedin() {
    return this.token.length > 1;
  }

  readToken() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    } else {
      this.token = "";
    }
    return this.token;
  }

}
