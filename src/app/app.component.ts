import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tarifario de multas', url: '/tarifa', icon: 'copy' },
    { title: 'Vehículo por placa', url: '/vehiculo', icon: 'car' },
    { title: 'Aplicar Multa', url: '/aplicarmulta', icon: 'clipboard' },
    { title: 'Conductor licencia', url: '/conductor', icon: 'card' },
    { title: 'Multas registradas', url: '/multas', icon: 'archive' },
    { title: 'Mapa de multas', url: '/mapamultas', icon: 'map' },
    { title: 'Noticias', url: '/noticias', icon: 'globe' },
    { title: 'Estado del clima', url: '/climaradar', icon: 'partly-sunny' },
    { title: 'Horóscopo ', url: '/horoscopo', icon: 'aperture' },
  ];
  public labels = 
  [
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' }
  ];
  constructor() {}
}
