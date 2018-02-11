import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {

  }

  close(){
    this.ngbActiveModal.dismiss(); //dismiss is canceled || but close is close pop-up when data is sent and close pop-up
  }

  add(data: NgForm){
    this.ngbActiveModal.close(data.value);
  }

}
