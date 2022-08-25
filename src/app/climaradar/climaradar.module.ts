import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaradarPageRoutingModule } from './climaradar-routing.module';

import { ClimaradarPage } from './climaradar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaradarPageRoutingModule
  ],
  declarations: [ClimaradarPage]
})
export class ClimaradarPageModule {}
