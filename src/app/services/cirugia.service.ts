import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cirugia } from '../Components/main/components/cirugia/cirugia.component';

@Injectable({
  providedIn: 'root'
})
export class CirugiaService {

  constructor( private http: HttpClient ) { }

  getCirugias(path: string): Observable<Cirugia> {
    return this.http.get<Cirugia>(environment.apiBaseURL + path);
  }

  create(path: string, data: Cirugia) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Cirugia) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
