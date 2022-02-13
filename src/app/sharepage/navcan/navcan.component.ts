import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
@Component({
  selector: 'app-navcan',
  templateUrl: './navcan.component.html',
  styleUrls: ['./navcan.component.css']
})
export class NavcanComponent implements OnInit {
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

   
   
    //console.log(this.Uid)
    
  }
  gotoCV(){
    return this.route.navigate(["/Cv"]);
  }
  goCreatoCV(){
    return this.route.navigate(["/create-cv"]);
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

}
