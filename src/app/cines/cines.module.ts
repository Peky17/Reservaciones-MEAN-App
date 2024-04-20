import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinesRoutingModule } from './cines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReservarCineComponent } from './pages/reservar-cine/reservar-cine.component';
import { CinesComponent } from './cines.component';
import { ViewCinesComponent } from './pages/view-cines/view-cines.component';

@NgModule({
  declarations: [CinesComponent, ReservarCineComponent, ViewCinesComponent],
  imports: [CommonModule, CinesRoutingModule, SharedModule],
})
export class CinesModule {}
