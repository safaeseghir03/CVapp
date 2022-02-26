import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { HotToastService } from '@ngneat/hot-toast';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-profile-c',
  templateUrl: './profile-c.component.html',
  styleUrls: ['./profile-c.component.css']
})
export class ProfileCComponent implements OnInit {
  Uid:any
  PhotoURL:any
    task: AngularFireUploadTask;
    ref:AngularFireStorageReference;
    Url:any;
    NomC:any
    percentages:any;
    user$ =this.authService.User
    constructor(private route :Router,private authService:AuthentificationService,private fs : AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService, private fst : AngularFireStorage) { }


  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
  }

  
  const docref =this.fs.collection("Candidats").doc(this.Uid);
  docref.get().subscribe(Rec=>{
  if(Rec.exists){
    this. PhotoURL=Rec.get('photoURL'),
    this.NomC=Rec.get('Nom')
    
  
   
  }else{
    console.log("error photo")
   
  }
  })
  
  
    }

    uploadImage(event:any){

      const id =Math.random().toString(36).substring(2);
      this.ref = this.fst.ref(id);
      this.task = this.ref.put(event.target.files[0]);
      this.percentages=this.task.percentageChanges()
      this.task.then((data)=>{
        data.ref.getDownloadURL().then(url=>{
        this.Url=url
        this.fs.collection("Candidats").doc(this.Uid).update({
          photoURL: url
        })
      })
      
      })
     
      var user = firebase.auth().currentUser;
      if (user) {
        this.Uid=user.uid;
        // User is signed in.
      } else {
        // No user is signed in.
      }
      console.log(this.Uid)
      console.log(this.Url)
     
  
      // this.fs.collection("Recruteurs").doc(this.Uid).set({
      
      //   photoURL: this.Url
      // })
    
  
  }



}
