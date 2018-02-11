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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ModalService } from './services/modal.service';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    CategoetComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,
    AngularFireDatabaseModule
  ],
  entryComponents:[
    AddCategoryComponent
  ],
  providers: [FirebaseService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
