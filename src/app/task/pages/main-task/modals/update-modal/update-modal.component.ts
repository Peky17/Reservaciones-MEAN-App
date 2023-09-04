import { Component } from '@angular/core';
import {
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal],
})
export class UpdateModalComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  open(content: any) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Mantener el fondo visible
      keyboard: true, // Permitir cerrar el modal con la tecla Esc
    };

    this.modalService.open(content, modalOptions);
  }
}
