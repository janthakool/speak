import { Injectable } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { AddCategoryComponent } from '../components/add-category/add-category.component';

@Injectable()
export class ModalService {

  constructor(private ngbModal: NgbModal) { }
  addCategory(): NgbModalRef{
    return this.ngbModal.open(AddCategoryComponent);
  }
}
