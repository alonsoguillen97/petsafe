import { Component, NgZone, OnInit } from '@angular/core';
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
  filteredPets: Pet[] = [];
  filteredFromFilterPage = false;
  selectedcategory: number;

  constructor(private apiService: AuthService,
    private navCtrl: NavController,
    private ngZone: NgZone,) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
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

  filterEventsByCategory(id) {
    console.log(id);
    this.filteredPets = this.pets.filter(item => item.category_id == id);
    this.selectedcategory = id;
    this.filteredFromFilterPage = true;
   
    
  }

  removeFilters(id) {

    this.filteredPets = [];
    this.filteredFromFilterPage = false;
    this.selectedcategory == null;
    this.ngZone.run(() => {
      // con this.selectedSubcategory = null, no funciona
      // con esto de abajo sí funciona
      this.selectedcategory = Object.assign({}, this.selectedcategory);
      
    });
    console.log(this.selectedcategory);
  }

}
