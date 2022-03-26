import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-manage-pets',
  templateUrl: './manage-pets.page.html',
  styleUrls: ['./manage-pets.page.scss'],
})
export class ManagePetsPage implements OnInit {

  pets: Pet[]=[];

  constructor(private apiService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private utilitiesService: UtilitiesService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.apiService.getEntity('own-pets').subscribe(async (pets: Pet[]) => {
      this.pets = pets;
      console.log(this.pets);
    });
  }


  goToInteriorPet(pet) {
    
    this.navCtrl.navigateForward('/pet-interior', {
      state: {
        pet: pet
      }
    });
  }

  goToEditPet(pet) {
    
    this.navCtrl.navigateForward('/edit-pet', {
      state: {
        pet: pet
      }
    });
  }


  public async deletePet(pet: Pet) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar mascota',
      message: '¿Quieres eliminar la mascota ' + pet.name + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            
            this.apiService.deleteEntity('pet', pet.id).subscribe((res) => {
              console.log(res);
              this.apiService.getEntity('own-pets').subscribe(async (pets: Pet[]) => {
                this.pets = pets;
                console.log(this.pets);
              });
              this.utilitiesService.showToast('Mascota eliminada correctamente');
            }, error => {
              console.log(error);
              
            });
          }
        }
      ]
    });

    await alert.present();

  }
}
