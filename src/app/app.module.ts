import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LoginRecruteurComponent } from './pages/login-recruteur/login-recruteur.component';

import { AuthentificationService } from 'src/app/services/authentification-service.service';
import { MatSliderModule } from '@angular/material/slider';
//signup
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { SignupRecruteurComponent } from './pages/signup-recruteur/signup-recruteur.component';

// 1. Import the libs firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { PageRecruteurComponent } from './container/page-recruteur/page-recruteur.component';
import { NavRecComponent } from './sharepage/nav-rec/nav-rec.component';
import { CreateAnnonceComponent } from './container/create-annonce/create-annonce.component';
import { PageCandidatComponent } from './container/page-candidat/page-candidat.component';
import { NavcanComponent } from './sharepage/navcan/navcan.component';
import { LoginCandidatComponent } from './pages/login-candidat/login-candidat.component';
import { SignupCandidatComponent } from './pages/signup-candidat/signup-candidat.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateCvComponent } from './container/create-cv/create-cv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorRComponent } from './pages/cor-r/cor-r.component';
import { ManageCandidatComponent } from './container/manage-candidat/manage-candidat.component';
import { CVComponent } from './container/cv/cv.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginRecruteurComponent,
    SignupRecruteurComponent,
    PageRecruteurComponent,
    NavRecComponent,
    CreateAnnonceComponent,
    PageCandidatComponent,
    NavcanComponent,
    LoginCandidatComponent,
    SignupCandidatComponent,
    CreateCvComponent,
    AboutComponent,
    ContactComponent,
    CorRComponent,
    ManageCandidatComponent,
    CVComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //signup
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
     // 3. Initialize
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule, //storage
     AngularFireDatabaseModule,
 
    
   
    HotToastModule.forRoot(),
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
