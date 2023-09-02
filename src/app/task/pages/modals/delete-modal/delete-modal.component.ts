import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  dataFromOtherComponent: any;

  constructor(){}

  ngOnInit(): void {

  }

}
