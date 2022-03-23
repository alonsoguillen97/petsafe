import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage implements OnInit {

  pets: Pet[]=[];

  constructor(private apiService: AuthService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.apiService.getEntity('pets').subscribe(async (pets: Pet[]) => {
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

}
