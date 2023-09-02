import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { NavbarComponent } from './pages/main-task/shared/navbar/navbar.component';
import { FooterComponent } from './pages/main-task/shared/footer/footer.component';
import { DeleteModalComponent } from './pages/main-task/modals/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  exports: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    DeleteModalComponent
  ]
})
export class TaskModule { }
