import { Component } from '@angular/core';
import { ReservarCineComponent } from '../../reservar-cine/reservar-cine.component';

@Component({
  selector: 'app-cine-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  fechaActual: Date;
  constructor(private reservarCineComponent: ReservarCineComponent) {
    this.fechaActual = new Date();
  }

  ngOnInit() {}

  previous() {
    this.reservarCineComponent.previous();
  }

  print() {
    // Crea un clon del div que contiene el contenido a imprimir
    const printContents = document
      .querySelector('.toPrint')!
      .cloneNode(true) as HTMLElement;

    // Encuentra la imagen que deseas excluir de la impresión
    const excludedImage = printContents.querySelector('.qrCode') as HTMLElement;
    if (excludedImage) {
      excludedImage.style.display = 'none'; // Oculta la imagen
    }

    // Crea un elemento HTML temporal para imprimir
    const printContainer = document.createElement('div');
    printContainer.appendChild(printContents);

    // Oculta todo el contenido de la página excepto el contenido a imprimir
    const elementsToHide = document.querySelectorAll('body > :not(.toPrint)');
    elementsToHide.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.display = 'none';
      }
    });

    // Agrega el contenido a imprimir al cuerpo del documento
    document.body.appendChild(printContainer);

    // Imprime el contenido
    window.print();

    // Restaura la visibilidad de los elementos ocultos
    elementsToHide.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.display = '';
      }
    });

    // Restaura la visibilidad de la imagen excluida
    if (excludedImage) {
      excludedImage.style.display = '';
    }

    // Elimina el contenido impreso del cuerpo del documento
    document.body.removeChild(printContainer);
  }

  formatFecha(fecha: Date): string {
    return (
      fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear()
    );
  }
}
