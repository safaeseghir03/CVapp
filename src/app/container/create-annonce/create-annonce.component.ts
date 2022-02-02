import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as firebase from 'firebase';

import { AuthentificationService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {
Uid: any
successMessage:any;

  constructor(private route:Router ,private fs : AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService) { }
    
// this.as.User.subscribe(User=>{
//   this.Uid=user.uid
//})
  
  

 ngOnInit(): void {
  }
  
  
  addAnnonce(f:any){

    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
    let data =f.value
    this.fs.collection("Annonces").add({
      NomEntreprise:data.nomEntre,
      Email:data.email,
      DateAnnonce:data.date,
      Description:data.Description,
      UidRec:this.Uid
      
    }).then(()=>{
      this.successMessage='votre annonce a été ajouté avec succés!!';
    }).then(()=>{
      this.route.navigate(["/page-recruteur "]);
    })
  .catch(() => {
    console.log("error")
  })
     
    

  }
}
