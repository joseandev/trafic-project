import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.page.html',
  styleUrls: ['./tarifa.page.scss'],
})
export class TarifaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  motivos = [
    ['No tener parabrisas', "RD$ 1,500.00"],
    ['No espejo retrovisor', 'RD$ 2,300.00'],
    ['No cruzar por los puentes para peatones', 'RD$ 1,800.00'],
    ['Conducir un vehículo con exceso de pasajero', 'RD$ 1,000.00'],
    ['Cristales Tintados', 'RD$ 2,000.00'],
    ['Transitar sin Casco', 'RD$ 2,500.00'],
    ['Transitar con luces apagadas', 'RD$ 1,200.00'],
    ['No tener luces direccionales', 'RD$ 2,000.00'],
    ['Transitar en vía contraria', 'RD$ 2,500.00'],
    ['Hablando por celular', 'RD$ 3,000.00'],
    ['Conducir sin portar licencia', 'RD$ 2,000.00'],
    ['Manejo temerario', 'RD$ 2,500.00'],
    ['Exceso de velocidad', 'RD$ 3,000.00'],
    ['Producir ruido innecesario', 'RD$ 1,500.00'],
    ['Dejar niños solos dentro del carro', 'RD$ 4,000.00']
  ]

}
