import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController, NavController, AlertController, LoadingController} from '@ionic/angular';
//import { Events } from '@ionic/angular';
import { PetsPage } from '../pets/pets.page';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { User } from 'src/app/models/User';
import { AppVariablesService } from 'src/app/services/app-variables.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loading: any;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private auth: AuthenticationService,
    private utilitiesService: UtilitiesService,
    //private events: Events,
    private appVariables: AppVariablesService) {
      this.loading = this.loadingCtrl.create({message: 'Espera un momento...'});
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /*

  async checkAuthenticated(){
    try{
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if(isAuthenticated) this.navCtrl.navigateRoot('/home');
    }catch(err){

    }
  }

  
  public submitForm(): void {
    this.authService.login(this.form.value)
      .then((response: any) => {
        console.log(response);
        this.authService.storageCredentials(response)
        setTimeout(() => {
          this.checkAuthenticated();
        },750)
      })

      .catch(err => {
        console.log(err)
      })
  }

  */


  public submitForm(): void {
    
    console.log(this.form.value);
    this.authService.login(this.form.value).subscribe((user: User) => {

      
      console.log(user);

      //Ahora aplicamos la cabecera devuelta a las siguientes peticiones
      this.authService.setTokenToHeaders(user.api_token);

      //Emitimos el evento de login
      //this.events.publish('user:login');

      // --- establecemos el usuario a lo largo de la aplicación ---
      this.appVariables.user = user;
      this.appVariables.apiToken = user.api_token;

      
      this.appVariables.reloadUserDataEveryXSeconds();

      //Vamos a inicio
      this.auth.login(user.api_token);

      this.navCtrl.navigateRoot('/tab/pets');

    }, (error) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast((error));
    });
  }

}
