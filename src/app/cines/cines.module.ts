import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinesRoutingModule } from './cines-routing.module';
import { CinesComponent } from './pages/cines/cines.component';


@NgModule({
  declarations: [
    CinesComponent
  ],
  imports: [
    CommonModule,
    CinesRoutingModule
  ]
})
export class CinesModule { }
