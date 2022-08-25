import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicarmultaPage } from './aplicarmulta.page';

const routes: Routes = [
  {
    path: '',
    component: AplicarmultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AplicarmultaPageRoutingModule {}
