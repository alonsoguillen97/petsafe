import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { UtilitiesService } from 'src/app/services/utilities.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private loading: any;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private utilitiesService: UtilitiesService) {
      this.loading = this.loadingCtrl.create({message: 'Espera un momento...'});
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async submitForm(){
    //console.log(this.form.value);
    //this.authService.register(this.form.value)

    this.authService.register(this.form.value).subscribe((user: User) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Registro correcto');

      this.navCtrl.navigateRoot('/login');

    }, (error) => {
      
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast((error));

    });
  }

      
    
      
  

}
