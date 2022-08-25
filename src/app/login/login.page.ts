import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
    ) { }

  ngOnInit() { }

 
  async onSubmit() {
  
    if (this.email=="keily16" && this.password=="1234") { 
      this.navCtrl.navigateForward('/home');
      }
      
      else if (this.email=="admin" && this.password=="admin") { 
        this.navCtrl.navigateForward('/home');
      }
     
      else if (this.email=="admin@gmail.com" && this.password=="admin") { 
          this.navCtrl.navigateForward('/home');
      }
      else {
        const alert = await this.alertController.create({
            header: 'Error!',
            subHeader: 'Usuario o contraseña incorrectos.',
            message: 'Usted no puede ingresar',
            buttons: ['OK'],
        });
      
          await alert.present();
        }
    
     
 }
}