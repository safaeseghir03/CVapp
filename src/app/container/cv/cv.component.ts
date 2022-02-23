import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
import {Router} from '@angular/router';
import {jsPDF} from "jspdf";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})


export class CVComponent implements OnInit {

  @ViewChild('content',{static: false}) el!:ElementRef;
  
  
  dataArray:any
  Uid:any
  keyParams:any

  constructor(private route : Router,private fs : AngularFirestore,private as:AuthentificationService,private params:ActivatedRoute) {
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

    const docref =this.fs.collection("CV").doc(this.Uid);
    docref.get().subscribe(doc=>{
    if(doc.exists){
      
    this.fs.collection("CV").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map((element:any) => {
        return{
          Competences:element.payload.doc.data()['Competences'],
          Education:element.payload.doc.data()['Education'],
          infoPersonnel:element.payload.doc.data()['infoPersonnel'],
          Experiences:element.payload.doc.data()['Experiences'],
          Langues:element.payload.doc.data()['Langues'],
          photoP:element.payload.doc.data()['photoP'],
          UidCan:element.payload.doc.data()['UidCan'],
          
         
        }

      })
    })
     
    }else{
      return this.route.navigate(["/page404"]);
     
    }
  })








    // this.fs.collection("CV").snapshotChanges().subscribe((data)=>{
    //   this.dataArray= data.map((element:any) => {
    //     return{
    //       Competences:element.payload.doc.data()['Competences'],
    //       Education:element.payload.doc.data()['Education'],
    //       infoPersonnel:element.payload.doc.data()['infoPersonnel'],
    //       Experiences:element.payload.doc.data()['Experiences'],
    //       Langues:element.payload.doc.data()['Langues'],
    //       photoP:element.payload.doc.data()['photoP'],
    //       UidCan:element.payload.doc.data()['UidCan'],
          
         
    //     }

    //   })
    // })
    
  }


  telecharger(){
    let pdf =new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf")
      }
    });
   
  }

}
