import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cor-r',
  templateUrl: './cor-r.component.html',
  styleUrls: ['./cor-r.component.css']
})
export class CorRComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }

  goToSignupC(){
    return this.route.navigate(["/signup-candidat"])
  }
  goToSignupR(){
    return this.route.navigate(["/signup-recruteur"])
  }
}
