import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-page-candidat',
  templateUrl: './page-candidat.component.html',
  styleUrls: ['./page-candidat.component.css']
})
export class PageCandidatComponent implements OnInit {
  dataArray:any
  constructor(private fs :AngularFirestore) { }

  ngOnInit(): void {
    this.fs.collection("Annonces").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map((element:any) => {
        return{
          id:element.payload.doc.id,
          DateAnnonce:element.payload.doc.data()['DateAnnonce'],
          Email:element.payload.doc.data()['Email'],
          NomEntreprise:element.payload.doc.data()['NomEntreprise'],
          Description:element.payload.doc.data()['Description'],
        }

      })
    })

  }

  }


