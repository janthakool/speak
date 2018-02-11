import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../models/category';
import { FirebaseService } from '../../services/firebase-service.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-categoet',
  templateUrl: './categoet.component.html',
  styleUrls: ['./categoet.component.css']
})
export class CategoetComponent implements OnInit {
  categoryList: AngularFireList<Category>;
  categoryInfo: CategoryInfo[];

  constructor(
    private modalService: ModalService,
    private firebaseService: FirebaseService,
    private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
    this.categoryList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.categoryInfo = items;
    });
  }
  add() {
    this.modalService.addCategory().result.then((response: Category) => {
      this.firebaseService.saveCategory(response);

    }, () => { });
  }
}
