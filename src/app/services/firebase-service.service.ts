import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../firebase.config';
import * as firebase from 'firebase/app';
import { ProfileInfo } from '../models/profile-info';
import { Category } from '../models/category';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
  categoryList: AngularFireList<Category>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
    this.categoryList = db.list('category');
  }

  loginWithFacebook(): Promise<ProfileInfo> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  saveCategory(data: Category){
    this.categoryList.push(data);
  }



}
