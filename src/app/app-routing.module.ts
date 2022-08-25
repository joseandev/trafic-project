import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'tarifa',
    loadChildren: () => import('./tarifa/tarifa.module').then( m => m.TarifaPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },

  {
    path: 'multas',
    loadChildren: () => import('./multas/multas.module').then( m => m.MultasPageModule)
  },

  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },

  {
    path: 'horoscopo',
    loadChildren: () => import('./horoscopo/horoscopo.module').then( m => m.HoroscopoPageModule)
  },
  {
    path: 'mapamultas',
    loadChildren: () => import('./mapamultas/mapamultas.module').then( m => m.MapamultasPageModule)
  },
  {
    path: 'climaradar',
    loadChildren: () => import('./climaradar/climaradar.module').then( m => m.ClimaradarPageModule)
  },
  {
    path: 'aplicarmulta',
    loadChildren: () => import('./aplicarmulta/aplicarmulta.module').then( m => m.AplicarmultaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
