import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escanea para obtener la información de una mascota',
      message: 'Pulsa el botón y fija la imagen del qr dentro del cuadrado que aparece en la cámara, una vez lo reconozca se abrirá automaticamente el perfil de la mascota escaneada.',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

}
