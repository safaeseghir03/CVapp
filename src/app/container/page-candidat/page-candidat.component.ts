import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
@Component({
  selector: 'app-page-candidat',
  templateUrl: './page-candidat.component.html',
  styleUrls: ['./page-candidat.component.css']
})
export class PageCandidatComponent implements OnInit {
  Uid: any;
  dataArray:any;
  successMessage:any;
  dataArray2:any;
  TableCv:any;
  PhotoURL:any
  Nom:any
  constructor(private route: Router ,private fs :AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService) { }

  ngOnInit(): void {
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
   
    
    this.fs.collection("Annonces").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map((element:any) => {
        return{
          id:element.payload.doc.id,
          DateAnnonce:element.payload.doc.data()['DateAnnonce'],
          Email:element.payload.doc.data()['Email'],
          NomEntreprise:element.payload.doc.data()['NomEntreprise'],
          Description:element.payload.doc.data()['Description'],
          image:element.payload.doc.data()['image'],
          uidRec:element.payload.doc.data()['UidRec'],
        
        }

      })
    })

   
    // const docref =this.fs.collection("Recruteurs").doc(this.dataArray.get('uidRec'));
    // docref.get().subscribe(Rec=>{
    // if(Rec.exists){

    //   this. PhotoURL=Rec.get('photoURL')
    // this.Nom=Rec.get('Nom')
     
    // }else{
    //   console.log("error photo")
     
    // }
    // })

  }

// if (data.exists) {
      //         console.log("Document data:", data.data());
      //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //     }
      //   }).catch(() => {
      //     console.log("Error getting document:");

  
   // console.log(annonceid)
  
    // this.fs.collection("Annonces").ref.doc(annonceid).get().then(data=>{
    //  console.log(data.get('UidCV'))
    //   //this.TableCv=data.get('UidCv')
    // })

    ////////////////////////////////////////////////
  //  if (data.exists) {
  //             console.log("Document data:", data.data());
  //         } else {
  //             // doc.data() will be undefined in this case
  //             console.log("No such document!");
  //         }
  //       }).catch(() => {
  //         console.log("Error getting document:");
  //       }

  goToProfile(uidRec:any){
     
      return this.route.navigate(['/profilerc/'+uidRec])
  }


  addC(annonceid:any,event:any){
 

  const docref =this.fs.collection("CvAnnonce").doc(annonceid);
  docref.get().subscribe(doc=>{
  if(doc.exists){
    this.fs.collection("CvAnnonce").ref.doc(annonceid).update({
      UidCV:firebase.firestore.FieldValue.arrayUnion(this.Uid)
    })
   
  }else{
    
    this.fs.collection("CvAnnonce").doc(annonceid).set({
      idAnnonce:annonceid,
      
      UidCV:[this.Uid],
      
      
    }).then(()=>{
      this.successMessage='votre annonce a été ajouté avec succés!!';
    })
  .catch(() => {
    console.log("error")
  });
  }
})

 event.currentTarget.disabled = true
  event.target.disabled = true;

console.log(annonceid)
console.log(this.Uid)











  // const ver =this.fs.collection("CvAnnonce").ref.doc(annonceid)
  // if(ver){
  //   this.fs.collection("CvAnnonce").doc(annonceid).set({
  //         idAnnonce:annonceid,
          
  //         UidCV:[this.Uid],
          
          
  //       }).then(()=>{
  //         this.successMessage='votre annonce a été ajouté avec succés!!';
  //       })
  //     .catch(() => {
  //       console.log("error")
  //     });
  // }else{
  //   this.fs.collection("CvAnnonce").ref.doc(annonceid).update({
  //     UidCV:firebase.firestore.FieldValue.arrayUnion(this.Uid)
  //   });
  // }
    // this.fs.collection("CvAnnonce").ref.doc(annonceid).update({
    //   UidCV:firebase.firestore.FieldValue.arrayUnion(this.Uid)
    // });
   


  //   this.fs.collection("CvAnnonce").doc(annonceid).set({
  //     idAnnonce:annonceid,
      
  //     UidCV:[this.Uid],
      
      
  //   }).then(()=>{
  //     this.successMessage='votre annonce a été ajouté avec succés!!';
  //   })
  // .catch(() => {
  //   console.log("error")
  // });




  }


}


