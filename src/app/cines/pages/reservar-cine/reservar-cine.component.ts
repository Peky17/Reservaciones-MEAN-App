import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-reservar-cine',
  templateUrl: './reservar-cine.component.html',
  styleUrls: [
    './reservar-cine.component.css',
    '../../../../assets/css/bs-stepper.css',
  ],
})
export class ReservarCineComponent {
  // Mensaje para cerrar pestaña
  // @HostListener('window:beforeunload', ['$event'])
  // handleBeforeUnload(event: any): void {
  //   const mensaje =
  //     '¿Estás seguro de abandonar la página? Los cambios no se guardarán.';
  //   event.returnValue = mensaje;
  // }

  constructor(private route: ActivatedRoute) {}

  private stepper: Stepper | undefined;
  id_cine: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    // Stepper
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement) {
      this.stepper = new Stepper(stepperElement, {
        linear: true,
        animation: true,
      });
    } else {
      console.error('Elemento con ID "stepper1" no encontrado.');
    }
  }

  next() {
    if (this.stepper) {
      this.stepper.next();
    }
  }

  previous() {
    if (this.stepper) {
      this.stepper.previous();
    }
  }
}
