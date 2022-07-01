import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { PetRequest } from 'src/app/models/PetRequest';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-own-requests',
  templateUrl: './own-requests.page.html',
  styleUrls: ['./own-requests.page.scss'],
})
export class OwnRequestsPage {

  requests: PetRequest[]=[];

  constructor(private utilitiesService: UtilitiesService,
    private apiService: AuthService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,) { }

 

  ionViewWillEnter(){
    this.apiService.getEntity('own-requests').subscribe(async (requests: PetRequest[]) => {
      this.requests = requests;
      console.log(this.requests);
    });
  }


  public async deleteRequest(request: PetRequest) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar solicitud',
      message: '¿Quieres eliminar la solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            
            this.apiService.deleteEntity('request', request.id).subscribe((res) => {
              console.log(res);
              this.apiService.getEntity('own-requests').subscribe(async (requests: PetRequest[]) => {
                this.requests = requests;
                console.log(this.requests);
              });
              this.utilitiesService.showToast('Solicitud eliminada correctamente');
            }, error => {
              console.log(error);
              this.utilitiesService.showToast('Error al eliminar la solicitud');
              
            });
          }
        }
      ]
    });

    await alert.present();

  }

  goToInteriorPet(pet) {
    
    this.navCtrl.navigateForward('/pet-interior', {
      state: {
        pet: pet
      }
    });
  }

  goToInteriorRequest(request) {
    
    this.navCtrl.navigateForward('/request-interior', {
      state: {
        request: request
      }
    });
  }

}

