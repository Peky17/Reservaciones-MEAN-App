import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservarCineComponent } from '../../reservar-cine/reservar-cine.component';

@Component({
  selector: 'app-cine-payement-card',
  templateUrl: './payement-card.component.html',
  styleUrls: ['./payement-card.component.css'],
})
export class PayementCardComponent {
  myForm!: FormGroup;
  constructor(
    private reservarCine: ReservarCineComponent,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      cardNumber: [''],
      expirationMonth: [''],
      expirationYear: [''],
      cvv: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log(this.myForm.value);
    }
  }

  previous() {
    this.reservarCine.previous();
  }
}
