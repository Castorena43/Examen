import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( private http: HttpClient ) { }

  getEspecialidades(path: string) {
    return this.http.get(environment.apiBaseURL + path);
  }
}
