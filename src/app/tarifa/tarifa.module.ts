import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarifaPageRoutingModule } from './tarifa-routing.module';

import { TarifaPage } from './tarifa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarifaPageRoutingModule
  ],
  declarations: [TarifaPage]
})
export class TarifaPageModule {}
