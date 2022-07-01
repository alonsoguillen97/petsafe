import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AuthenticationService } from 'src/app/services/authentication.service';
declare var google: any;

@Component({
  selector: 'app-edit-profile-user',
  templateUrl: './edit-profile-user.page.html',
  styleUrls: ['./edit-profile-user.page.scss'],
})
export class EditProfileUserPage implements OnInit {

  private loading: any;
  public base64img: string;
  public form: FormGroup;
  public editImage: boolean = false;
  uploadphoto: boolean = false;
  clickedInPrediction = false;
  googleAutocomplete: any;
  predictions: any[] = [];
  placesService: any;
  map: any;
  public user: User;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    public auth: AuthenticationService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private utilitiesService: UtilitiesService,
    private nativeGeocoder: NativeGeocoder,
    private camera: Camera,) { 
    this.googleAutocomplete = new google.maps.places.AutocompleteService();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      phone: [''],
      location: [''],
      image: [''],
      latitude: [''],
      longitude: ['']
    });

    this.authService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
      
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

    
    console.log(this.form.value);
    //this.authService.register(this.form.value)

    this.authService.updateuser(this.form.value).subscribe((user: User) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Usuario actualizado correctamente');

      this.navCtrl.navigateRoot('/tab2/user-profile');

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
      this.uploadphoto = true;
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
