import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LoginRecruteurComponent } from './pages/login-recruteur/login-recruteur.component';
import { SignupRecruteurComponent } from './pages/signup-recruteur/signup-recruteur.component';
import { PageRecruteurComponent } from './container/page-recruteur/page-recruteur.component';
import { NavRecComponent } from './sharepage/nav-rec/nav-rec.component';
import { CreateAnnonceComponent } from './container/create-annonce/create-annonce.component';
import { PageCandidatComponent } from './container/page-candidat/page-candidat.component';
import { LoginCandidatComponent } from './pages/login-candidat/login-candidat.component';
import { SignupCandidatComponent } from './pages/signup-candidat/signup-candidat.component';
import { CreateCvComponent } from './container/create-cv/create-cv.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorRComponent } from './pages/cor-r/cor-r.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login-recruteur',component: LoginRecruteurComponent},
  {path:'signup-recruteur',component: SignupRecruteurComponent},
  {path:'page-recruteur',component: PageRecruteurComponent},
  {path:'nav-rec',component: NavRecComponent},
  {path:'create-annonce',component: CreateAnnonceComponent},
  {path:'page-candidat',component: PageCandidatComponent },
  {path:'login-candidat',component: LoginCandidatComponent},
  {path:'signup-candidat',component: SignupCandidatComponent},
  {path:'create-cv',component: CreateCvComponent},
  {path:'About',component:  AboutComponent},
  {path:'contact',component:  ContactComponent},
  {path:'cor-r',component: CorRComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
