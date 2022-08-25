import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AplicarmultaPageRoutingModule } from './aplicarmulta-routing.module';

import { AplicarmultaPage } from './aplicarmulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AplicarmultaPageRoutingModule
  ],
  declarations: [AplicarmultaPage]
})
export class AplicarmultaPageModule {}
