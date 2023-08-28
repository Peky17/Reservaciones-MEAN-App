import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['kike@gmail.com', [Validators.required, Validators.email]],
    password: [
      '123457',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    this.authService.login(this.miFormulario.value).subscribe((res) => {
      if (res === true) {
        // Almacenar el usuario logueado
        localStorage.setItem('user', JSON.stringify(this.authService.user));
        // Bienvenida
        Swal.fire({
          title: 'SESIÓN INICIADA CON ÉXITO',
          text: 'Bienvenido ' + this.authService.user.username,
          icon: 'success'
        });
        // Redireccionar
        this.router.navigateByUrl('/task');
      } else {
        Swal.fire({
          title: 'OPERACIÓN DENEGADA',
          text: res,
          icon: 'error'
        });
      }
    });
  }
}
