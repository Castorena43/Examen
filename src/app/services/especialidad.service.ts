import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../Components/especialidad/especialidad.component';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor( private http: HttpClient ) { }

  getEspecialidades(path: string) : Observable<Especialidad> {
    return this.http.get<Especialidad>(environment.apiBaseURL + path);
  }

  create(path: string, data: Especialidad) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Especialidad) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
