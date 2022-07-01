import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-liked-pets',
  templateUrl: './liked-pets.page.html',
  styleUrls: ['./liked-pets.page.scss'],
})
export class LikedPetsPage implements OnInit {

  pets: Pet[]=[];

  constructor(private apiService:AuthService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.apiService.getEntity('pets-user').subscribe(async (pets: Pet[]) => {
      this.pets = pets;
      console.log(pets);
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
