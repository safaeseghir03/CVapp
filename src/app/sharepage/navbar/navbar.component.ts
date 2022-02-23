import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

goToLoginRec(){
return this.route.navigate(["/login-recruteur"])
}

goToLoginCan(){
  return this.route.navigate(["/login-candidat"])
  }
goToContact(){
    return this.route.navigate(["/contact"])
  }
goToAbout(){
      return this.route.navigate(["/About"])
    }




}
