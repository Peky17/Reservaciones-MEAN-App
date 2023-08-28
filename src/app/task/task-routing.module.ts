import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './pages/main-task/main-task.component';

const routes: Routes = [
  {
    path: 'mainTask',
    component: MainTaskComponent,
  },
  {
    path: '**',
    redirectTo: 'mainTask',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
