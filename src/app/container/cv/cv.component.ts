import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  dataArray:any
  Uid:any
  constructor(private fs : AngularFirestore,private as:AuthentificationService) {
    this.as.User.subscribe(user=>{
      this.Uid=user.uid
    })
    }

  ngOnInit(): void {
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
    
  }


 

afficher(){
  
  console.log(this.dataArray.Competences)
}

}
