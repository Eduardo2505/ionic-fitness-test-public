import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  loginForm: FormGroup;
  msn:string;

  constructor(private authService: AuthService,private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.msn="";
    
    let token = this.authService.getPlainToken();
    if (token != null) {
      this.router.navigateByUrl('/tabs/courses');
    }
    localStorage.removeItem('token');
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      pass: [null, [Validators.required]],
    });
  }

  async signIn() {
    this.msn="";
    localStorage.removeItem('token');
    if (!this.loginForm.valid) {
      return;
    }

    try {
      const response_ = await this.loginService.login(this.loginForm.value).toPromise();
      localStorage.setItem('token', response_["token"])


      this.router.navigate(['/tabs/courses']);

    } catch (error) {
      console.error(error);
      this.msn="El usuario no existe"
      return;

    }

  }

  goToForgot() {
    this.router.navigate(['/forgot-password']);
  }
}
