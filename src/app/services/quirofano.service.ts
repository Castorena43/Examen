import { Quirofano } from './../Components/quirofano/quirofano.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuirofanoService {

  constructor( private http: HttpClient ) { }

  getQuirofanos(path: string) : Observable<Quirofano> {
    return this.http.get<Quirofano>(environment.apiBaseURL + path);
  }

  create(path: string, data: Quirofano) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Quirofano) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
