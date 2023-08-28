import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent {

  user: any;

  constructor(private authService: AuthService ) {
    this.user = JSON.parse(localStorage.getItem('user') || "");
    console.log(this.user);

  }

}
