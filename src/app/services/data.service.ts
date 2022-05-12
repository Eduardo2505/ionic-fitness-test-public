import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  endPoint = environment.API_URL + 'auth';

  constructor(private http: HttpClient) {}


  signin(user: string, pass: string) {
    return this.http.post<{ token: string }>(this.endPoint + '/signin', { username: user, password: pass });
  }
  
}
