import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import * as moment from 'moment';
import { PetCategory } from 'src/app/models/PetCategory';
import { PetBreed } from 'src/app/models/PetBreed';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.page.html',
  styleUrls: ['./edit-pet.page.scss'],
})
export class EditPetPage implements OnInit {

  pet: Pet;
  public editImage: boolean = false;
  public form: FormGroup;
  public base64img: string;
  categories: PetCategory[]=[];
  breeds: PetBreed[]=[];
  special_cares: boolean = false;
  dangerous_breed: boolean = false;
  

  constructor(private formBuilder: FormBuilder,
    private apiService: AuthService,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,
    private camera: Camera,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      gender: [''],
      birthdate: [''],
      pet_category_id: [''],
      pet_breed_id: [''],
      size: [''],
      activity: [''],
      weight: [''],
      special_cares: [''],
      dangerous: [''],
      description: [''],
      image: ['']
    });

    this.apiService.getEntity('pet-categories').subscribe(async (categories: PetCategory[]) => {
      this.categories = categories;
      console.log(this.categories);
    });

    this.apiService.getEntity('pet-breeds').subscribe(async (breeds: PetBreed[]) => {
      this.breeds = breeds;
      console.log(this.breeds);
    });

    this.pet = history.state.pet;

    console.log(this.pet);
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



  async submitForm(){
    
    let newdate = this.form.get('birthdate').value;
    newdate = moment(newdate).format('YYYY-MM-DD');


    this.form.patchValue({
      birthdate: newdate,
      special_cares: this.special_cares,
      dangerous: this.dangerous_breed
    })

    if(this.form.get('birthdate').value == 'Invalid date'){
      this.form.patchValue({
        birthdate: null,
      })
    }

    console.log(this.form.get('birthdate').value);
   
    
  

    console.log(this.form.value);

    this.apiService.addEntity(`update-pet/${this.pet.id}`,this.form.value).subscribe((pet: Pet) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast('Mascota actualizada correctamente');
      this.navCtrl.navigateRoot('/tab1/refugio-profile');
    }, (error) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast('Error al editar la mascota');
    });
    
    this.form.reset();
    this.editImage = false;
  }


  /**
  * Añadir imagen de perfil
  */
   public adjuntarImagen(): void {
    this.editImage = false;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 1920,
      targetHeight: 1080,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((urlFoto) => {
      this.base64img = 'data:image/jpeg;base64,' + urlFoto;
      // this.form. = this.base64img;
      this.form.patchValue({ image: this.base64img });
      this.editImage = true;
    }).catch(error => {
      this.utilitiesService.showAlert('Error al obtener imagen', error);
      this.editImage = false;
    })
  }

}
