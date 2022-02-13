import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormArray,FormBuilder,FormControl,FormGroup,ValidationErrors,ValidatorFn,Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import * as firebase from 'firebase';

import { AuthentificationService } from 'src/app/services/authentification-service.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.component.html',
  styleUrls: ['./create-cv.component.css']
})


export class CreateCvComponent implements OnInit {
  Uid: any;
  successMessage:any;
  experiencesForm:any;
  educationForm:any;
  SkillsForm:any;
  languagesForm:any;
  path:any;
  ////////////////////////////////////////////
 
  task: AngularFireUploadTask;
  ref:AngularFireStorageReference;
  Url:any;
  percentages:any;
  ///////////////////////////////////////////////////
infoPersonnel= new FormGroup({
  profil:new FormControl('',Validators.required),
  Nom:new FormControl('',Validators.required),
  Prenom:new FormControl('',Validators.required),
  Addresse:new FormControl('',Validators.required),
  DateN:new FormControl('',Validators.required),
  Tele: new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  CDesc:new FormControl(''),
});
//////////////////////////////////////////////////////


form=this.fb.group({
  lessons:this.fb.array([])
 });

 lessonForm=this.fb.group({
  title:['',Validators.required],
  Niveau:['Débutant',Validators.required]
});
///////////////////////////////////////////

  constructor(private fb :FormBuilder,private route:Router ,private fs : AngularFirestore,private as: AuthentificationService, private router: Router, private toast: HotToastService, private fst : AngularFireStorage) {
    this.experiencesForm=this.fb.group({
      experiences:this.fb.array([
        this.fb.group({
         NomEntreprise:[''],
          Emploi:[''],
          NMois:[''],
          DescEntr:['']
        })
      ])
    })

   this.educationForm=this.fb.group({
     educations:this.fb.array([
       this.fb.group({
         Diplome:[''],
         Ecole:[''],
         Annee:[''],
         Mention:['']
       })
     ])
   })

   this.SkillsForm=this.fb.group({
    Skills:this.fb.array([
      this.fb.group({
        skill:['',Validators.required],
        Niveau:['Débutant',Validators.required]
        
      })
    ])
  })
 

  this.languagesForm=this.fb.group({
    Langues:this.fb.array([
      this.fb.group({
        langue:['',Validators.required],
        Niveaul:['Débutant',Validators.required]
        
      })
    ])
  })



   }




  ngOnInit(): void {
  }

/////////////////// info presonnelle///////////////////////////

  onSubmit(){
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
    let data =this.infoPersonnel.value;
    console.warn(data);
    
    this.fs.collection("CVinfopersonnel").add({
      NomCandidat:data.Nom,
      PrénomCandidat:data.Prenom,
      DateNaissance:data.DateN,
      Adresse:data.Addresse,
      Tele:data.Addresse,
      Email:data.Tele,
      photoP:this.Url,
      UidCan:this.Uid
      
    }).then(()=>{
      this.successMessage='votre annonce a été ajouté avec succés!!';
    })
  .catch(() => {
    console.log("error")
  })


  }

 //////////////////////////skills/////////////////////////////////////////
  
  // get lessons(){
  //   return this.form.controls["lessons"] as FormArray;
  // }

  // addLesson(){
  //   const lessonForm=this.fb.group({
  //     title:['',Validators.required],
  //     Niveau:['Débutant',Validators.required]
  //   });
  //   this.lessons.push(lessonForm);
  // }
  // addLesson(){
      
  //     this.lessons.push(this.lessonForm);
  //   }

  // deleteSkill(i:number){
  //   this.lessons.removeAt(i);

  // }


  // onsubmit2(){
  //   let data =this.lessons.value;
  //   console.warn(data);
  // }
  skillSubmit(){
    var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
    let data =this.SkillsForm.value;
    console.warn(data);
  }  

  get Skills(){
    return this.SkillsForm.get('Skills') as FormArray;
  }
  addSkill(){
  let newRows=this.fb.group({
    skill:['',Validators.required],
    Niveau:['Débutant',Validators.required]
  
  })
  this.Skills.push(newRows);
  }
  
  removeSkill(i:number){
    this.Skills.removeAt(i);
  }





////////////////////////Experiences///////////////////////////

expSubmit(){
  var user = firebase.auth().currentUser;
  if (user) {
    this.Uid=user.uid;
    // User is signed in.
  } else {
    // No user is signed in.
  }
  let data =this.experiencesForm.value;
  console.warn(data);
  
  this.fs.collection("CVExperiences").add({
    // NomEntrprise:data.NomEntreprise,
    // TypeEmploi:data.Emploi,
    // NombreMois:data.NMois,
    CompetencC:data,
    UidCan:this.Uid

  }).then(()=>{
    this.successMessage='succés!!';
  })
.catch(() => {
  console.log("error")
})
}

get experiences(){
  return this.experiencesForm.get('experiences') as FormArray;
}
addExperience(){
let newRows=this.fb.group({
  NomEntreprise:[''],
  Emploi:[''],
  NMois:[''],
  DescEntr:['']

})
this.experiences.push(newRows);
}

removeExperience(i:number){
  this.experiences.removeAt(i);
}

/////////////////////////Education///////////////////////////////
eduSubmit(){
  var user = firebase.auth().currentUser;
  if (user) {
    this.Uid=user.uid;
    // User is signed in.
  } else {
    // No user is signed in.
  }
  let data =this.educationForm.value;
  console.warn(data);
  
}
get educations(){
  return this.educationForm.get('educations') as FormArray;
}
addEducation(){
  let newRows=this.fb.group({
    Diplome:[''],
    Ecole:[''],
    Annee:[''],
    Mention:['']
  
  })
  this.educations.push(newRows);
}

removeEducation(i:number){
  this.educations.removeAt(i);
}

/////////////////////////////// Langues //////////////////////////////
lgSubmit(){
  var user = firebase.auth().currentUser;
  if (user) {
    this.Uid=user.uid;
    // User is signed in.
  } else {
    // No user is signed in.
  }
  let data =this.languagesForm.value;
  console.warn(data);
  
}
get Langues(){
  return this.languagesForm.get('Langues') as FormArray;
}

addLangue(){
  let newRows=this.fb.group({
    langue:['',Validators.required],
    Niveaul:['Débutant',Validators.required]
  
  })
  this.Langues.push(newRows);
}

removeLangue(i:number){
  this.Langues.removeAt(i);
}



/////////////////////////////////////////////////////////
CVsubmit(event: any){
  event.currentTarget.disabled = true
  event.target.disabled = true;
  var user = firebase.auth().currentUser;
    if (user) {
      this.Uid=user.uid;
      // User is signed in.
    } else {
      // No user is signed in.
    }
  let datainfoper=this.infoPersonnel.value;
  let dataexp=this.experiencesForm.value;
  let dataskills=this.SkillsForm.value;
  let dataeduc=this.educationForm.value;
  let datalang=this.languagesForm.value;
//   this.fs.collection("CV").add({
//     infoPersonnel:datainfoper,
//     Experiences:dataexp,
//     Competences:dataskills,
//     Education:dataeduc,
//     Langues:datalang,
//     UidCan:this.Uid
    
//   }).then(()=>{
//     this.successMessage='votre annonce a été ajouté avec succés!!';
//   })
// .catch(() => {
//   console.log("error")
// })

this.fs.collection("CV").doc(this.Uid).set({
      infoPersonnel:datainfoper,
      Experiences:dataexp,
      Competences:dataskills,
      Education:dataeduc,
      Langues:datalang,
      photoP:this.Url,
      UidCan:this.Uid,
      
      
    }).then(()=>{
      this.successMessage='votre cv est ajouté avec succés!!';
    })
  .catch(() => {
    console.log("error")
  })

}


uploadImage(event:any){
//  const id =Math.random().toString(36).substring(2)
//   const file = event.target.files[0]
//   const task = this.fst.upload(id, file);
// const ref = this.fst.ref(id);

//   //this.task=this.ref.put(event.target.files[0]);
//   this.task.then((data:any)=>{
//     data.ref.getDownloadURL().then((url:any)=>{
//           this.Url=url;
//           console.log(this.Url)
//     })
//   }) 
const id =Math.random().toString(36).substring(2);
this.ref = this.fst.ref(id);
this.task = this.ref.put(event.target.files[0]);
this.percentages=this.task.percentageChanges()
this.task.then((data)=>{
  data.ref.getDownloadURL().then(url=>{
  this.Url=url
  
})

})

  }
  
GoToCV(){
  return this.route.navigate(['/Cv/'+this.Uid])
}











}
