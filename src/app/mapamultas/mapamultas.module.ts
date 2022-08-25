import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapamultasPageRoutingModule } from './mapamultas-routing.module';

import { MapamultasPage } from './mapamultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapamultasPageRoutingModule
  ],
  declarations: [MapamultasPage]
})
export class MapamultasPageModule {}
