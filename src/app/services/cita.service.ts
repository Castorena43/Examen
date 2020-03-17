import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../Components/main/components/cita/cita.component';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor( private http: HttpClient ) { }

  getCitas(path: string) : Observable<Cita> {
    return this.http.get<Cita>(environment.apiBaseURL + path);
  }

  create(path: string, data: Cita) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Cita) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
