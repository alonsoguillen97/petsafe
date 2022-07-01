import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { PetLost } from 'src/app/models/PetLost';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
declare var google: any;

@Component({
  selector: 'app-create-pet-lost',
  templateUrl: './create-pet-lost.page.html',
  styleUrls: ['./create-pet-lost.page.scss'],
})
export class CreatePetLostPage implements OnInit {
  public form: FormGroup;
  public base64img: string;
  public editImage: boolean = false;
  clickedInPrediction = false;
  googleAutocomplete: any;
  predictions: any[] = [];
  placesService: any;
  map: any;

  constructor(private formBuilder: FormBuilder,
    private apiService: AuthService,
    private camera: Camera,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,
    private nativeGeocoder: NativeGeocoder,) { 
      this.googleAutocomplete = new google.maps.places.AutocompleteService();
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      image: [''],
      location: ['', Validators.required],
      latitude: [''],
      longitude: [''],
    });

    // cuando se escriba una dirección, que se autocomplete al escribir
    this.form.get('location').valueChanges.subscribe(address => {
      this.clickedInPrediction = false;
      let value = address;
      if (value) {
        this.googleAutocomplete.getPlacePredictions({
          input: value,
          types: [],
          // componentRestrictions: { country: 'es' }
        }, (predictions, status) => {
          this.predictions = predictions;
        });
      }
      else {
        this.predictions = [];
      }
    });
  }


  async submitForm(){
    if (this.form.get('location').value) {
      const address = this.form.get('location').value;
      try {
        let result = await this.nativeGeocoder.forwardGeocode(address);
        console.log(result);
        if (result.length > 0) {
          this.form.patchValue({
            latitude: result[0].latitude,
            longitude: result[0].longitude
          });
        }
      }
      catch (err) { }
    }
  

    this.apiService.addEntity('create-pet-lost', this.form.value).subscribe((pet: PetLost) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Mascota publicada correctamente');

      this.navCtrl.navigateRoot('/tab1/pets');

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


  async choosePrediction(prediction) {
    this.map = await new google.maps.Map(document.getElementById('modal_map_canvas'), {
      zoom: 17
    });
    this.placesService = await new google.maps.places.PlacesService(this.map);

    let request = {
      placeId: prediction.place_id,
      fields: ['geometry']
    };

    this.placesService.getDetails(request, (place, status) => {
      if (status == 'OK') {
        this.form.patchValue({
          location: prediction.description,
          latitud: place.geometry.location.lat(),
          longitud: place.geometry.location.lng(),
        });
        this.clickedInPrediction = true;
        this.predictions = [];
      }
    })
  }

}
