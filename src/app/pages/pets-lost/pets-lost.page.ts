import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PetLost } from 'src/app/models/PetLost';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pets-lost',
  templateUrl: './pets-lost.page.html',
  styleUrls: ['./pets-lost.page.scss'],
})
export class PetsLostPage {

  pets: PetLost[]=[];
  public isLoading: boolean = true;

  constructor(public alertController: AlertController,
    private apiService: AuthService,) { }

 

  ionViewWillEnter(){
    this.apiService.getEntity('petslost').subscribe(async (pets: PetLost[]) => {
      this.pets = pets;
      console.log(this.pets);
      this.isLoading = false;
    });

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mascotas abandonadas',
      message: 'En esta sección se denunciarán mascotas que están abandonadas y no pertenecen a ningún centro de acogida. El objetivo es darles difusión para que sean acogidos por una familia o un refugio. Si has visto o tienes una mascota que ha sido abandonada y de la cual no puedes hacerte cargo puedes publicarla en esta sección pulsando en el botón "denunciar abandono".',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

}
