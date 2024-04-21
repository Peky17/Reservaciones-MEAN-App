import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinesRoutingModule } from './cines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReservarCineComponent } from './pages/reservar-cine/reservar-cine.component';
import { CinesComponent } from './cines.component';
import { ViewCinesComponent } from './pages/view-cines/view-cines.component';
import { CardSliderComponent } from './pages/components/card-slider/card-slider.component';
import { SelectAsientosComponent } from './pages/components/select-asientos/select-asientos.component';
import { SeatsioAngularModule } from '@seatsio/seatsio-angular';
@NgModule({
  declarations: [
    CinesComponent,
    ReservarCineComponent,
    ViewCinesComponent,
    CardSliderComponent,
    SelectAsientosComponent,
  ],
  imports: [
    CommonModule,
    CinesRoutingModule,
    SharedModule,
    SeatsioAngularModule,
  ],
})
export class CinesModule {}
