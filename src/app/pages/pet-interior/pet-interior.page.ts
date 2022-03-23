import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-interior',
  templateUrl: './pet-interior.page.html',
  styleUrls: ['./pet-interior.page.scss'],
})
export class PetInteriorPage implements OnInit {

  pet: Pet;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.pet = history.state.pet;
  }


  goToInteriorRefugio() {
    
    this.navCtrl.navigateForward('/refugio-interior', {
      state: {
        refugio: this.pet.user
      }
    });
  }

}
