import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Paciente } from '../Components/paciente/paciente.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( private http: HttpClient ) { }

  getEspecialidades(path: string) : Observable<Paciente> {
    return this.http.get<Paciente>(environment.apiBaseURL + path);
  }

  create(path: string, data: Paciente) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Paciente) {
    return this.http.post(environment.apiBaseURL + path, data);
  }
}
