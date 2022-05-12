import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Constants } from '../../shared/utils/constans';
import { TokenAuth } from '../services/data.dto';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint = environment.API_URL + 'auth';

  constructor(private http: HttpClient, private router: Router) {}

  headerToken(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.getPlainToken());
  }

  signin(user: string, pass: string) {
    return this.http.post<{ token: string }>(this.endPoint + '/signin', { username: user, password: pass });
  }

  // changePass(cambioContrasena: CambioContrasena){
  //   return this.http.post(this.endPoint+'/changepass', cambioContrasena, { headers: this.headerToken() });
  // }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('tipoLogin');
  }

  async logout() {
   
   
      this.clearToken();
      this.router.navigateByUrl('/signin');
    
  }

  getPlainToken(): string {
    if (this.getToken()) {
      if (this.isAuthenticated()) {
        return localStorage.getItem('token');
      }
    }
    this.logout();
    return null;
  }

  getToken(): TokenAuth {
    if (localStorage.getItem('token')) {
      return jwt_decode(localStorage.getItem('token')) as TokenAuth;
    } else {
      this.logout();
      return null;
    }
  }

  getTokenInfo(token: string): TokenAuth {
    if (token) {
      return jwt_decode(token) as TokenAuth;
    } else {
      return null;
    }
  }

  getRol(): string {
    const token = this.getToken();
    if (!token.roles) {
      return 'SIN ROL';
    }
    return token.roles[0].split('_')[1];
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      const tokenIsExpirated = this.tokenIsExpirated(token);
      if (tokenIsExpirated) {
        this.clearToken();
        
      }
      return !tokenIsExpirated;
    }
    return false;
  }

  tokenIsExpirated(token: TokenAuth): boolean {
    if (!token) {
      return false;
    }
    if (!token.exp) {
      return false;
    }
    return Number(new Date()) > token.exp * 100000;
    // token.exp*1000
  }

  hasRole(roles: string[]) {
    const inter = roles.filter(e => this.getToken().roles.includes(e));
    if (inter.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
