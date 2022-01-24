import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
@Component({
  selector: 'app-login-recruteur',
  templateUrl: './login-recruteur.component.html',
  styleUrls: ['./login-recruteur.component.css']
})
export class LoginRecruteurComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private authService:AuthentificationService ,private route : Router , private toast: HotToastService) { }

  
  
  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  register() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    const { email,password} = this.loginForm.value;
    return this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() =>{
      this.route.navigate(["/page-recruteur"]);

    });
  }
  goToSignupR(){
    return this.route.navigate(["/signup-recruteur"]);
  } 

  
}
