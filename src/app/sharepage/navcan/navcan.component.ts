import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navcan',
  templateUrl: './navcan.component.html',
  styleUrls: ['./navcan.component.css']
})
export class NavcanComponent implements OnInit {

  constructor(private route : Router, private fa :AngularFireAuth) { }

  ngOnInit(): void {
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
