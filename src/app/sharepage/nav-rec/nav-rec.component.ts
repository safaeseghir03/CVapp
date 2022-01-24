import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-rec',
  templateUrl: './nav-rec.component.html',
  styleUrls: ['./nav-rec.component.css']
})
export class NavRecComponent implements OnInit {

  constructor(private route : Router, private fa :AngularFireAuth) { }

  ngOnInit(): void {
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

}
