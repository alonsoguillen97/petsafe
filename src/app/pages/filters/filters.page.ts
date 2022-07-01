import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  public form: FormGroup;
  special_cares: boolean = false;
  dangerous_breed: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private apiService: AuthService,
    private utilitiesService: UtilitiesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      size: [''],
      activity: [''],
      special_cares: [''],
      dangerous_breed: [''],
     
      
         
    });
  }

  updateCares(){
    if(this.special_cares == false){
      this.special_cares = true;
      console.log(this.special_cares);
    }else if(this.special_cares == true){
      this.special_cares = false;
      console.log(this.special_cares);
    }
  }

  updateBreed(){
    if(this.dangerous_breed == false){
      this.dangerous_breed = true;
      console.log(this.dangerous_breed);
    }else if(this.dangerous_breed == true){
      this.dangerous_breed = false;
      console.log(this.dangerous_breed);
    }
  }

  


  async submitForm() {


    this.form.patchValue({
      special_cares: this.special_cares,
      dangerous_breed: this.dangerous_breed
    })

    console.log(this.form.value);


    try {
      let pets: Pet[] = await this.apiService.addEntity('pets/filter', this.form.value).toPromise();
    
    console.log(pets);
      
    this.modalCtrl.dismiss({
      filteredStores: pets
    });
  }
  catch(error) {
    

    console.log('error = ');
    console.log(error);
  }
   
      
  }

  async closeModal(){
    this.modalCtrl.dismiss({
    });
  }

}
