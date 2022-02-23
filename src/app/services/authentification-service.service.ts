import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { from, Observable } from 'rxjs';
//import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {
  
  // User:Observable<any>
User:Observable<any>
 userUid : any;
  constructor(private auth : AngularFireAuth) { 
    this.User= this.auth.user;
  }

  

   signUp( email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword( email, password);
    
  
  }
  login(email: string, password: string): Observable<any> {
    return from(auth().signInWithEmailAndPassword(email,password));
  }

  signOut(){
    return from(auth().signOut());
    
  }

  








//   currentUser :any;

//   login22()
//   {    
//           // ... Code of you login function including you auth method ...
//           if (user && !user.isAnonymous) {
//                  this.currentUser= user.uid;
//           } 
//   }

// getCurrentUser(){
//      return currentUser;}














 }
