import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaradarPage } from './climaradar.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaradarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaradarPageRoutingModule {}
