import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  bool:boolean = false
  car: any
  isDisabled:boolean = false

  placa:string = "";

  constructor(private database:DatabaseService) { }

  ngOnInit() {
    
  }

  buscar(){
    this.database.getById('Vehiculos', this.placa).then(observabl=>{
      observabl.subscribe(ref=>{
        this.car = ref.data()

        if(this.car.marca != ''){
          this.bool = true
        }
      })
    }).catch(res=>{
      console.log(res)
    })
  }

  verificar(){
    if(this.placa.length == 6){
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  }
}
