import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,private authService: AuthService,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
     
   
    return next.handle(req).pipe(
      catchError(e => {

        if (e.status == 401) {
          this.authService.logout();   
        }else if (e.status == 403) {

        }else if (e.status == 412) {
          console.error('Log Error < ' + e.error.error +' >');
          console.error('Log Error < ' + e.error.mensaje +' >');
        }else if (e.status == 400) {
          this.router.navigateByUrl('/signup');
        }else {
          console.error('Log Error < ' + e.error.error+' >');
          console.error('Log Error < ' + e.error.mensaje+' >');
        }

        return throwError(e);
      })
    );
  }
}
