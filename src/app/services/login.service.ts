import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ExerciseDTO, ExerciseResultDto, LoginResponse, responseDto } from './data.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlEndPoint = environment.API_URL + 'auth';
  private urlexercise = environment.API_URL + 'exercise';
  constructor(private http: HttpClient) { }

  login(body){
   
    return this.http.post<LoginResponse[]>(this.urlEndPoint+ '/signin', body);
  }

  signup(body){
    return this.http.post<any[]>(this.urlEndPoint+ '/signup', body);
  }



  exercise(body){
    return this.http.post<ExerciseResultDto>(this.urlexercise+ '/getAll', body);
  }

  getby(id){
    return this.http.get<ExerciseDTO>(this.urlexercise+ '/'+id);
  }

  calificar(body){
    return this.http.post<responseDto>(this.urlexercise, body);
  }
}
