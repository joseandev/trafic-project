import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  licencia:string = "";
  conductor:any
  /* 20033054006 */
  bool:boolean = false
  isDisabled:boolean = false

  constructor(private database:DatabaseService) { }

  ngOnInit() {
  }

  buscar(){
    this.database.getById('Conductores', this.licencia).then(observabl=>{
      observabl.subscribe(ref=>{
        this.conductor = ref.data()

        if(this.conductor.nombre != ''){
          this.bool = true
        }
      })
    })
  }

  verificar(){
    if(this.licencia.length == 10){
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  }

}
