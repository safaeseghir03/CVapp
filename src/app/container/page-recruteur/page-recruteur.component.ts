import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthentificationService } from 'src/app/services/authentification-service.service';

@Component({
  selector: 'app-page-recruteur',
  templateUrl: './page-recruteur.component.html',
  styleUrls: ['./page-recruteur.component.css']
})
export class PageRecruteurComponent implements OnInit {
dataArray:any
Uid:any;
CvArray:any;
  dataArray2:any
  constructor(private fs : AngularFirestore,private as:AuthentificationService,private route:Router) {
   this.as.User.subscribe(user=>{
     this.Uid=user.uid
   })
   }
  
  ngOnInit(): void {
    // var user = firebase.auth().currentUser;
    // if (user) {
    //   this.Uid=user.uid;
    //   // User is signed in.
    // } else {
    //   // No user is signed in.
    //   // *ngIf="Uid==={{annonce.UidRec}}"
    // }

    
    this.fs.collection("Annonces").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map((element:any) => {
        return{
          id:element.payload.doc.id,
          DateAnnonce:element.payload.doc.data()['DateAnnonce'],
          Email:element.payload.doc.data()['Email'],
          NomEntreprise:element.payload.doc.data()['NomEntreprise'],
          Description:element.payload.doc.data()['Description'],
          image:element.payload.doc.data()['image'],
          UidRec:element.payload.doc.data()['UidRec'],
        }

      })
    })
   
  }
  
  


  candidatures(annonceid:any){

  console.log(annonceid)

 
  const docref =this.fs.collection("CvAnnonce").doc(annonceid);
  docref.get().subscribe(doc=>{
    this.CvArray=doc.get('UidCV')
    console.log(this.CvArray)
    ////////////////////////
    this.fs.collection("CV").snapshotChanges().subscribe((data)=>{
      this.dataArray2= data.map((element:any) => {
        return{
          infoPersonnel:element.payload.doc.data()['infoPersonnel'],
          photoP:element.payload.doc.data()['photoP'],
          UidCan:element.payload.doc.data()['UidCan'],
         
        }

      })
    })
  })
 







  }




 voirCv(UidC:any){
    console.log(UidC)
this.route.navigate(['/Cv/'+UidC])
  }





}
