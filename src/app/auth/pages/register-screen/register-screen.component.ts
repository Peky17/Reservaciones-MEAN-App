import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css'],
})
export class RegisterScreenComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}

  registerUsuario() {
    const formData = this.miFormulario.value;

    if (formData.password === formData.confirmPassword) {
      this.registerService.registrarUsuario(formData).subscribe((res) => {
        if (res === true) {
          Swal.fire({
            title: 'OPERACIÓN EXITOSA',
            text: 'Usuario registrado exitosamente.',
            icon: 'success',
          });
          // Redireccionar
          this.router.navigateByUrl('/auth/login');
        } else {
          Swal.fire({
            title: 'OPERACIÓN DENEGADA',
            text: 'No se pudo registrar el usuario.',
            icon: 'error',
          });
        }
      });
    } else {
      Swal.fire({
        title: 'ERROR',
        text: 'Las contraseñas no coinciden.',
        icon: 'error',
      });
    }
  }
}
