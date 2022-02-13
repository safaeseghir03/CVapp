import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    return this.route.navigate(["/page-candidat"])
  }
  goToCreateCv(){
    return this.route.navigate(["/create-cv"])
  }

}
