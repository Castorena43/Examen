import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../Components/main/components/doctor/doctor.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private http: HttpClient ) { }

  getDoctores(path: string) : Observable<Doctor> {
    return this.http.get<Doctor>(environment.apiBaseURL + path);
  }

  create(path: string, data: Doctor) {
    return this.http.post(environment.apiBaseURL + path, data);
  }

  delete(path: string) {
    return this.http.delete(environment.apiBaseURL + path);
  }

  update(path: string, data: Doctor) {
    return this.http.put(environment.apiBaseURL + path, data);
  }
}
