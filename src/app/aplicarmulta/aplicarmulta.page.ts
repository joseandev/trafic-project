import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-aplicarmulta',
  templateUrl: './aplicarmulta.page.html',
  styleUrls: ['./aplicarmulta.page.scss'],
})
export class AplicarmultaPage implements OnInit {

  cedula: string = '';
  placa: string = ''

  srcImg: string | ArrayBuffer;
  img: string = '';
  imgName:string = ''

  comentario: string = '';
  hora:string = ''
  latitud: string = '';
  longitud: string = '';

  pipe = new DatePipe('en-US');

  bool = false
  desactivarBtn = true

  constructor(private databas: DatabaseService, private storage:StorageService) { }

  ngOnInit() {
  }

  cargarImagen(event: any) {

    this.verificar()
    
    let file = event.target.files[0]
    let reader = new FileReader();

    reader.readAsDataURL(file)
    reader.onloadend = () => {
    /*      console.log(reader.result)
          console.log(event) */
      this.bool = true
      this.srcImg = reader.result
      this.storage.subirImg(`${file.name}` + '_' + Date.now(), reader.result).then(urlImg => {
        this.img = urlImg
        console.log(urlImg)
      })
    }
  }

  agregar() {
    if(this.validacionCampos()){
      this.databas.create('Multas', {
        cedula: this.cedula,
        placa: this.placa,
        motivo: this.motivo,
        img: this.img,
        comentario: this.comentario,
        latitud: this.latitud,
        longitud: this.longitud,
        fecha: this.pipe.transform(new Date(), 'dd/MM/YYYY'),
        hora: this.hora
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

      this.limpiarCampos()

    }
  }

  verificar(){
    if(this.validacionCampos()){
      this.desactivarBtn = false
    } else {
      this.desactivarBtn = true
    }

    console.log(this.desactivarBtn)
  }

  limpiarCampos(){
    this.cedula = '';
    this.placa = '';
    this.motivo = this.motivos[0];
    this.img = '';
    this.srcImg = '';
    this.imgName = ''
    this.comentario = '';
    this.hora = ''
    this.latitud = '';
    this.longitud = '';
  }


  validacionCampos(){
    if(this.cedula.length == 11 && this.hora != '' && this.motivo != '' && this.img != '' && this.comentario != '' && this.latitud.length >= 8 && this.longitud.length >= 8) {
      return true
    } else {
      return false
    }
  }

  motivos = [
    'No tener parabrisas',
    'No espejo retrovisor',
    'No cruzar por los puentes para peatones',
    'Conducir un vehículo con exceso de pasajero',
    'Cristales Tintados',
    'Transitar sin Casco',
    'Transitar con luces apagadas',
    'No tener luces direccionales',
    'Violar la Luz roja',
    'Hablando por celular',
    'Sin placa',
    'Manejo temerario',
    'Exceso de velocidad',
    'Producir ruido innecesario',
    'Dejar niños solos dentro del carro'
  ]

  motivo = this.motivos[0];
}
