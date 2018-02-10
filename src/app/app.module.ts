import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { firebaseConfig } from './firebase.config';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { FirebaseService } from './services/firebase-service.service';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoetComponent } from './components/categoet/categoet.component';


const routes: Routes = [
  { path: 'category', component: CategoetComponent},
  { path: 'home', component: HomeComponent}, // and localhost:port/home
  { path: '', component: LoginComponent}, //nothings go to Login page
  { path: '**', redirectTo: '/', pathMatch: 'full'} // this is ** not found in direct will back to..

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CategoetComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
