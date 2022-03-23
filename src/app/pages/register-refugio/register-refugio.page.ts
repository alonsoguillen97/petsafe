import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-register-refugio',
  templateUrl: './register-refugio.page.html',
  styleUrls: ['./register-refugio.page.scss'],
})
export class RegisterRefugioPage implements OnInit {

  private loading: any;
  public base64img: string;
  public form: FormGroup;
  public editImage: boolean = false;
  uploadphoto: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private utilitiesService: UtilitiesService,
    private camera: Camera,) {
      this.loading = this.loadingCtrl.create({message: 'Espera un momento...'});
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      web: [''],
      donation: [''],
      image: ['']
    });
  }


  async submitForm(){
    console.log(this.form.value);
    //this.authService.register(this.form.value)

    this.authService.registerrefugio(this.form.value).subscribe((user: User) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Registro correcto');

      this.navCtrl.navigateRoot('/login');

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

}
