import { Component, Input, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  user: any;
  tasks: Array<any> = [];

  @Input() tarea: any;

  constructor(private taskService: TareasService) {}

  ngOnInit() {
    this.user = this.taskService.user;
    this.taskService.readTareas().subscribe(
      (res) => {
        this.tasks = res.tareas;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'SU SESIÓN HA EXPIRADO',
          text: error
        });
      }
    );
  }
}
