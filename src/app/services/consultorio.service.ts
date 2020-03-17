import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consultorio } from '../Components/main/components/consultorio/consultorio.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  constructor( private http: HttpClient ) { }

  getConsultorios(path: string) : Observable<Consultorio> {
    return this.http.get<Consultorio>(environment.apiBaseURL + path);
  }

  create(path: string, data: Consultorio) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Consultorio) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
