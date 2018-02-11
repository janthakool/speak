import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../models/category';
import { FirebaseService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-categoet',
  templateUrl: './categoet.component.html',
  styleUrls: ['./categoet.component.css']
})
export class CategoetComponent implements OnInit {
  categoryInfo: CategoryInfo[];

  constructor(
    private modalService: ModalService,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getCategory().subscribe((item) => {
      this.categoryInfo = item;
    });
  }
  add() {
    this.modalService.category().result.then((response: Category) => {
      this.firebaseService.saveCategory(response);

    }, () => { });
  }

  edit(data: CategoryInfo){
    this.modalService.category(data).result.then((response: Category) => {
      this.firebaseService.updateCategory(data.key,response);

    }, () => { });
  }

  delete(data: CategoryInfo){
    this.firebaseService.deleteCategory(data.key);
  }
}
