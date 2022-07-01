import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetBreed } from 'src/app/models/PetBreed';
import { PetCategory } from 'src/app/models/PetCategory';
import { AuthService } from 'src/app/services/auth.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import * as moment from 'moment';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.page.html',
  styleUrls: ['./create-pet.page.scss'],
})
export class CreatePetPage implements OnInit {

  public form: FormGroup;
  public editImage: boolean = false;
  categories: PetCategory[]=[];
  breeds: PetBreed[]=[];
  filteredBreeds: PetBreed[]=[];
  public base64img: string;
  special_cares: boolean = false;
  dangerous_breed: boolean = false;
  filtered: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private apiService: AuthService,
    private camera: Camera,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      pet_category_id: ['', Validators.required],
      pet_breed_id: [''],
      size: ['', Validators.required],
      activity: ['', Validators.required],
      weight: ['', Validators.required],
      special_cares: [''],
      dangerous: [''],
      description: ['', Validators.required],
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

  onCategoryClickAction($id) {

    console.log($id.detail.value)
    this.filteredBreeds = this.breeds.filter(item => item.category_id == $id.detail.value);
    this.filtered = true;
  }


  async submitForm(){
    let newdate = this.form.get('birthdate').value;
    newdate = moment(newdate).format('YYYY-MM-DD');
    

    

    this.form.patchValue({
      birthdate: newdate,
      special_cares: this.special_cares,
      dangerous: this.dangerous_breed
    })
    console.log(this.form.value);
    //this.authService.register(this.form.value)

    this.apiService.addEntity('create-pet', this.form.value).subscribe((pet: Pet) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Mascota creada correctamente');

      this.navCtrl.navigateRoot('/tab1/refugio-profile');

    }, (error) => {
      
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast((error));

    });
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
