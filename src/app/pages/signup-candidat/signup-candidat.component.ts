// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AuthentificationService } from 'src/app/services/authentification-service.service';

// @Component({
//   selector: 'app-signup-candidat',
//   templateUrl: './signup-candidat.component.html',
//   styleUrls: ['./signup-candidat.component.css']
// })
// export class SignupCandidatComponent implements OnInit {

//   constructor(private sa :AuthentificationService, private fs :AngularFirestore, private route :Router) { }

//   ngOnInit(): void {
//   }
//   register(f:any){
//     let data =f.value
//       this.sa.signUp(data.email,data.password)
//       .then((user:any)=>{
//       this.fs.collection("Candidats").doc(user.user.uid).set({
//         flname:data.flname,
//         Email:data.email,
//         Password:data.password
//       }).then(()=>{
//         this.route.navigate(["/login-candidat"]);
//       })
//     }).catch(() => {
//       console.log("error")
//     })
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


import { AbstractControl,FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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
  selector: 'app-signup-candidat',
  templateUrl: './signup-candidat.component.html',
  styleUrls: ['./signup-candidat.component.css']
})
export class SignupCandidatComponent implements OnInit {

  


  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );
  constructor(private route:Router,private fs: AngularFirestore,private authService: AuthentificationService, private router: Router, private toast: HotToastService, private af : AngularFireAuth) { }

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


logout(){
  this.af.signOut()

  .then(()=>{
    console.log("logout done")
  })
  .catch(()=>{
    console.log("error")
  })
}
Register(f:any){
  if (!this.signUpForm.valid) {
    return;
  }

  let data =f.value
  this.authService.signUp(data.email,data.password).then((user:any)=>{
  this.fs.collection("Candidats").doc(user.user.uid).set({
    Nom:data.name,
    Email:data.email,
    Password:data.password
  }).then(()=>{
    this.route.navigate(["/login-candidat"]);
  })
}).catch(() => {
  console.log("error")
})
}














}
