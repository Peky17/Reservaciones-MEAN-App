import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  closeModal() {
    this.activeModal.close();
  }

  constructor(public activeModal: NgbActiveModal){
  }

  ngOnInit(): void {

  }

}
