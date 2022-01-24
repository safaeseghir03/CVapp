import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-signup-recruteur',
  templateUrl: './signup-recruteur.component.html',
  styleUrls: ['./signup-recruteur.component.css']
})

export class SignupRecruteurComponent implements OnInit {
  
constructor(private sa :AuthentificationService, private fs :AngularFirestore, private route :Router) { }


register(f:any){
  let data =f.value
    this.sa.signUp(data.email,data.password)
    .then((user:any)=>{
    this.fs.collection("Recruteurs").doc(user.user.uid).set({
      flname:data.flname,
      Email:data.email,
      Password:data.password
    }).then(()=>{
      this.route.navigate(["/login-recruteur"]);
    })
  }).catch(() => {
    console.log("error")
  })
}
  ngOnInit(): void {
  }

}
