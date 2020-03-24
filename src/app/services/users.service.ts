import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Components/main/components/user/user/user.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(path: string): Observable<User> {
    return this.http.get<User>(environment.apiBaseURL + path);
  }

  register(path: string, data: User) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: User) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
