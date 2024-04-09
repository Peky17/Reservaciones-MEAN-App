import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TeatrosComponent } from './task/pages/teatros/teatros.component';
import { CinesComponent } from './task/pages/cines/cines.component';
import { MuseosComponent } from './task/pages/museos/museos.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'museos',
    loadChildren: () => import('./museos/museos.module').then((m) => m.MuseosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'cines',
    loadChildren: () => import('./cines/cines.module').then((m) => m.CinesModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'teatros',
    loadChildren: () => import('./teatros/teatros.module').then((m) => m.TeatrosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
