import { Component, OnInit } from '@angular/core';

import { Platform,NavController } from '@ionic/angular';

import { ApiService } from './services/api.service';
import { User } from './models/User';

import { environment } from "../environments/environment";

import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilitiesService } from './services/utilities.service';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  user: User;
  public isLoading: boolean = true;
  

  constructor(
    private platform: Platform,
    
    private apiService: AuthService,
  
 
    private auth: AuthenticationService,
    private navCtrl: NavController,
    private storage: Storage,
    private utilities: UtilitiesService,
   
  ) {
  }

  /**
   * Nos suscribimos a los cambios dle perfil
   */
  public ngOnInit(): void {
   
    this.auth.authenticationState.subscribe(token => {
      if (token != 'logout' && token != '') {
        
        //this.prepararStripe();
        this.apiService.getEntity('user').subscribe((user: User) => {


          if (user.role_id == 3) {
            this.apiService.setTokenToHeaders(token);
            this.navCtrl.navigateRoot('/tab1/pets').then(() => {
              this.isLoading = false;
            });
          } 
          if (user.role_id == 2) {
            this.apiService.setTokenToHeaders(token);
            this.navCtrl.navigateRoot('/tab2/pets').then(() => {
              this.isLoading = false;
            });
          } 
        }, error => {
          this.isLoading = false;
        });
      } else if (token == 'logout') {
        this.apiService.removeTokenToHeaders();
        this.navCtrl.navigateRoot('home').then(() => {
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
        console.log("primera vez");
      }

      // IMPORTANTE: para comprobar si la app está o no suspendida, debe ponerse el dominio en la propiedad "domainUrl" del archivo "src/environments/environment.ts"
      // this.checkIfAppIsSuspended();
    });

    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        
        
      });
    }

    this.apiService.userChanges.subscribe((user: User) => {
      this.user = user;
    });
  }


  

  

 
  

 

}
