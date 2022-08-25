import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'AVISO',
      subHeader: 'Te enviaremos el código para cambiar la contraseña',
      message: 'Nos contactaremos con usted!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
