import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    console.log(this.miFormulario.value);
    this.authService.login(this.miFormulario.value).subscribe(res => {
      if(res){
        localStorage.setItem("user", JSON.stringify(this.authService.user));
        // Redireccionar
        this.router.navigateByUrl('/task');
      }
    })
  }
}
