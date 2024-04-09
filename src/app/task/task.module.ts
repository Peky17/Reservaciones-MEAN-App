import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { NavbarComponent } from './pages/main-task/shared/navbar/navbar.component';
import { FooterComponent } from './pages/main-task/shared/footer/footer.component';
import { DeleteModalComponent } from './pages/main-task/modals/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './pages/main-task/modals/update-modal/update-modal.component';
import { AddModalComponent } from './pages/main-task/modals/add-modal/add-modal.component';
import { TeatrosComponent } from './pages/teatros/teatros.component';
import { CinesComponent } from './pages/cines/cines.component';
import { MuseosComponent } from './pages/museos/museos.component';


@NgModule({
  declarations: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    DeleteModalComponent,
    UpdateModalComponent,
    AddModalComponent,
    TeatrosComponent,
    CinesComponent,
    MuseosComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    MainTaskComponent,
    NavbarComponent,
    FooterComponent,
    DeleteModalComponent,
    UpdateModalComponent
  ]
})
export class TaskModule { }
