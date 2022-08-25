import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapamultasPage } from './mapamultas.page';

const routes: Routes = [
  {
    path: '',
    component: MapamultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapamultasPageRoutingModule {}
