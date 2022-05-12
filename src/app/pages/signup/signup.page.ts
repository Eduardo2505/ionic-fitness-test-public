import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../app/services/login.service';
import { UserDto } from '../../../app/services/data.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registerForm: FormGroup;

  userDto: UserDto
  sms: string;

  constructor( private loginService: LoginService,private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.sms="";
    localStorage.removeItem('token');
    this.registerForm = this.fb.group({
      birth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  async signUp() {
    ///this.router.navigate(['new-account']);
    const userDto = new UserDto();
    userDto.fechanacimiento = this.registerForm.value.birth;
    userDto.pass = this.registerForm.value.password;
    userDto.username = this.registerForm.value.user;
    userDto.sex =Number(this.registerForm.value.gender);


    try {
       await this.loginService.signup(userDto).toPromise();

    } catch (error) {
      
      this.sms="El usuario ya existe";
     
    }
  }

 
}
