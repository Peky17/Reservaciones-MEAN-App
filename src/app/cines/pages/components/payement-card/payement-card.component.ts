import { Component } from '@angular/core';
import { ReservarCineComponent } from '../../reservar-cine/reservar-cine.component';

@Component({
  selector: 'app-cine-payement-card',
  templateUrl: './payement-card.component.html',
  styleUrls: ['./payement-card.component.css'],
})
export class PayementCardComponent {
  constructor(private reservarCine: ReservarCineComponent) {}

  previous() {
    this.reservarCine.previous();
  }
}
