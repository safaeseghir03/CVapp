// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Router } from '@angular/router';
// import { AuthentificationService } from 'src/app/services/authentification-service.service';

// @Component({
//   selector: 'app-signup-recruteur',
//   templateUrl: './signup-recruteur.component.html',
//   styleUrls: ['./signup-recruteur.component.css']
// })

// export class SignupRecruteurComponent implements OnInit {
  
// constructor(private sa :AuthentificationService, private fs :AngularFirestore, private route :Router) { }


// register(f:any){
//   let data =f.value
//     this.sa.signUp(data.email,data.password)
//     .then((user:any)=>{
//     this.fs.collection("Recruteurs").doc(user.user.uid).set({
//       flname:data.flname,
//       Email:data.email,
//       Password:data.password
//     }).then(()=>{
//       this.route.navigate(["/login-recruteur"]);
//     })
//   }).catch(() => {
//     console.log("error")
//   })
// }
//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AbstractControl,FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as firebase from 'firebase';
import { User } from 'firebase';


import { AuthentificationService } from 'src/app/services/authentification-service.service';

  export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-signup-recruteur',
  templateUrl: './signup-recruteur.component.html',
  styleUrls: ['./signup-recruteur.component.css']
})
export class SignupRecruteurComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      nomEntreprise: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );
  constructor(private route:Router ,private fs : AngularFirestore,private authService: AuthentificationService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
  }
  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get nomEntreprise() {
    return this.signUpForm.get('nomEntreprise');
  }

  get profession() {
    return this.signUpForm.get('profession');
  }


  Register(f:any){
    if (!this.signUpForm.valid) {
      return;
    }

    let data =f.value
    this.authService.signUp(data.email,data.password).then((user:any)=>{
    this.fs.collection("Recruteurs").doc(user.user.uid).set({
      Nom:data.name,
      Email:data.email,
      NomEntreprise:data.nomEntreprise,
      Profession:data.profession,
      Password:data.password
    }).then(()=>{
      this.route.navigate(["/login-recruteur"]);
    })
  }).catch(() => {
    console.log("error")
  })
  
  }



  














}
