import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-nav-rec',
  templateUrl: './nav-rec.component.html',
  styleUrls: ['./nav-rec.component.css']
})
export class NavRecComponent implements OnInit {
  Uid:any
  dataArray:any
  Nom:any
  constructor(private fs :AngularFirestore,private route : Router, private fa :AngularFireAuth,private as:AuthentificationService) {
    
    this.as.User.subscribe(user=>{
      this.Uid=user.uid
    })
   }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      console.log("User is signed in.") 
      // var uidC=this.Uid
      // console.log(uidC)
      const docref =this.fs.collection("Candidats").doc(this.Uid);
      docref.get().subscribe(doc=>{
        this.Nom=doc.get('Nom')
    
      })
    } else {
      console.log(" No user is signed in.")
    }
  }

  logout(){
    this.fa.signOut()
  
    .then(()=>{
      this.route.navigate (["/"])
    })
    .catch(()=>{
      console.log("error")
    })
  }
  
  goCreatoAnnonce(){
    return this.route.navigate(["/create-annonce"]);
  } 
  goToManageC(){
    return this.route.navigate(["/ManageC"]);
  }


  gotoAnnonce(){
    return this.route.navigate(["/page-recruteur"]);
  }
}
