import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { MenuController, NavController } from '@ionic/angular';
import { AppVariablesService } from 'src/app/services/app-variables.service';
import { codeErrors } from "../../utils/utils";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;

  constructor(private apiService: AuthService,
    private utilitiesService: UtilitiesService,
    private formBuilder: FormBuilder,
    private appVariables: AppVariablesService,
    private navCtrl: NavController,
    private auth: AuthenticationService,) {}


    ngOnInit() {
      this.form = this.formBuilder.group({
        email: 'nologin@gmail.com',
        password: 'alonso',
      });
    }

    public autologin(): void {

      console.log(this.form.value);
    this.apiService.login(this.form.value).subscribe(
      (user: User) => {
        this.utilitiesService.dismissLoading();

        // Ahora aplicamos la cabecera devuelta a las siguientes peticiones
        this.apiService.setTokenToHeaders(user.api_token);

        // Emitimos el evento de login
        //this.events.publish('user:login');

        // --- establecemos el usuario a lo largo de la aplicación ---
        this.appVariables.user = user;
        this.appVariables.apiToken = user.api_token;

        this.appVariables.reloadUserDataEveryXSeconds();

        // Vamos a inicio
        //this.auth.login(user.api_token);
        this.navCtrl.navigateForward('/pets-no-login', {
          state: {
            user: user
          }
        });
      },
      (error) => {
        this.utilitiesService.dismissLoading();
        this.utilitiesService.showToast(codeErrors(error));
      }
    );
  }

}
