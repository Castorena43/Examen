import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  apiMarvel() {
    return this.http.get(environment.apiBaseURL + 'api/consumir');
  }
}
