import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-pet-interior',
  templateUrl: './pet-interior.page.html',
  styleUrls: ['./pet-interior.page.scss'],
})
export class PetInteriorPage implements OnInit {
  public user: User;
  public pet: Pet;

  constructor(private navCtrl: NavController,
    private apiService: AuthService,
    private utilitiesService: UtilitiesService,) { }

  ngOnInit() {
    this.apiService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
      
    });
    this.pet = history.state.pet;

    
  }


  goToInteriorRefugio() {
    
    this.navCtrl.navigateForward('/refugio-interior', {
      state: {
        refugio: this.pet.user
      }
    });
  }

  goToAdoptionForm() {
    
    this.navCtrl.navigateForward('/adoption-form', {
      state: {
        pet: this.pet
      }
    });
  }


  async likePet(pet: Pet) {
  
    pet.liked = !pet.liked;
    await this.apiService
      .addEntity('pet-like', { pet_id: this.pet.id })
      .toPromise();
      this.utilitiesService.showToast('Has añadido a la mascota '+this.pet.name+' a favoritos');
    
    
  }

  async unlikePet(pet: Pet) {
    pet.liked = !pet.liked;
    await this.apiService
      .addEntity('pet-unlike', { pet_id: this.pet.id })
      .toPromise();
      this.utilitiesService.showToast('Has eliminado a la mascota '+this.pet.name+' de favoritos');
  }

}
