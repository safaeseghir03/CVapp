import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthentificationService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-signup-candidat',
  templateUrl: './signup-candidat.component.html',
  styleUrls: ['./signup-candidat.component.css']
})
export class SignupCandidatComponent implements OnInit {

  constructor(private sa :AuthentificationService, private fs :AngularFirestore, private route :Router) { }

  ngOnInit(): void {
  }
  register(f:any){
    let data =f.value
      this.sa.signUp(data.email,data.password)
      .then((user:any)=>{
      this.fs.collection("Candidats").doc(user.user.uid).set({
        flname:data.flname,
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
