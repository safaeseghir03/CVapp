import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormArray,FormBuilder,FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AuthentificationService } from 'src/app/services/authentification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-candidat',
  templateUrl: './manage-candidat.component.html',
  styleUrls: ['./manage-candidat.component.css']
})
export class ManageCandidatComponent implements OnInit {
  nodata:any
  
  searchForm= new FormGroup({
    profil:new FormControl('',Validators.required),
    Addresse:new FormControl('',Validators.required),
    
  });

  /////////////
  Adresse:any;
  profile:any;
  dataArray:any;
  constructor(private fs : AngularFirestore,private as:AuthentificationService,private route:Router) { }

  ngOnInit(): void {
  }


  chercher(){
    this.nodata=true;
    let data =this.searchForm.value;
     this.Adresse=data.Addresse;
    this.profile=data.profil
   
    this.fs.collection("CV").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map((element:any) => {
        return{
          infoPersonnel:element.payload.doc.data()['infoPersonnel'],
          photoP:element.payload.doc.data()['photoP'],
          UidCan:element.payload.doc.data()['UidCan'],
         
        }

      })
    })
  }

  voirCv(UidC:any){
    console.log(UidC)
this.route.navigate(['/Cv/'+UidC])
  }

}
