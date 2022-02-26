import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from 'src/app/services/authentification-service.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { HotToastService } from '@ngneat/hot-toast';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profilerc',
  templateUrl: './profilerc.component.html',
  styleUrls: ['./profilerc.component.css']
})
export class ProfilercComponent implements OnInit {
  Uid:any
  PhotoURL:any
    Nom:any
    keyParams:any
    NomEntreprise:any;
    Profession:any
    user$ =this.authService.User
  constructor(private route :Router,private params:ActivatedRoute,private authService:AuthentificationService,private fs : AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService, private fst : AngularFireStorage) {

    this.params.params.subscribe(query=>{
      return this.keyParams=query['id'] 
      
    })


    this.as.User.subscribe(user=>{
      this.Uid=user.uid
    })
   }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }

const docref =this.fs.collection("Recruteurs").doc(this.keyParams);
docref.get().subscribe(Rec=>{
if(Rec.exists){
  this. PhotoURL=Rec.get('photoURL'),
  this.Nom=Rec.get('Nom'),
  this.NomEntreprise=Rec.get('NomEntreprise'),
  this.Profession=Rec.get('Profession')
 
}else{
  console.log("error photo")
 
}
})

  }

}
