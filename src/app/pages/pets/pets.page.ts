import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Notification } from 'src/app/models/Notification';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { FiltersPage } from '../filters/filters.page';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
})
export class PetsPage {

  pets: Pet[]=[];
  filteredPets: Pet[] = [];
  notifications: Notification[]=[];
  filteredFromFilterPage = false;
  selectedcategory: number;
  public isLoading: boolean = true;

  constructor(private apiService: AuthService,
    private navCtrl: NavController,
    private ngZone: NgZone,
    private modalCtrl: ModalController,) { }


  ionViewWillEnter(){
    this.apiService.getEntity('pets').subscribe(async (pets: Pet[]) => {
      this.pets = pets;
      console.log(this.pets);
      this.isLoading = false;
    });

    this.apiService.getEntity('received-notifications').subscribe(async (notifications: Notification[]) => {
      this.notifications = notifications;
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


  async goToFiltersPage() {
    const modal = await this.modalCtrl.create({
      component: FiltersPage,
    });
    await modal.present();
    await modal.onDidDismiss().then(modalData => {
      if (modalData.data) {
        if (modalData.data.filteredStores) {
          this.filteredPets = modalData.data.filteredStores;
          this.filteredFromFilterPage = true;
        }
      }
    });
  }

}