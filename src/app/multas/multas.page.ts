import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-multas',
  templateUrl: './multas.page.html',
  styleUrls: ['./multas.page.scss'],
})
export class MultasPage implements OnInit {

  multas = []
  bool = []

  constructor(private database:DatabaseService) { }

  ngOnInit() {
    this.database.getAll('Multas').then(firebaseResponse=>{
      firebaseResponse.subscribe(multasRef =>{

        this.multas = multasRef.map(multaRef=>{
          let multa = multaRef.payload.doc.data();
          multa['id'] = multaRef.payload.doc.id
          this.bool.push(false)
          return multa
        })

        console.log(this.multas)
      })
    })
  }

  getAll(){
    this.database.getAll('Multas')
  }

  show(i){
    this.bool[i] = !this.bool[i]
  }
}
