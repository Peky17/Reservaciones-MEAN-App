import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  user: any;
  tasks: Array<any> = [];

  constructor(private taskService: TareasService, private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(DeleteModalComponent);
  }


  ngOnInit() {
    this.user = this.taskService.user;
    this.taskService.readTareas().subscribe((res) => {
      this.tasks = res.tareas;
    });
  }
}
