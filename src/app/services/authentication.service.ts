import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { UtilitiesService } from './utilities.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject('');

  constructor(private storage: Storage, private plt: Platform, private utilitiesService: UtilitiesService) {
    this.checkToken();
  }

  public checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      console.log(res);
      if (res) {
        this.authenticationState.next(res);
      }
    })
  }

  public login(token): Promise<void> {
    return this.storage.set(TOKEN_KEY, token).then(() => {
      this.authenticationState.next(token);
    });
  }

  public logout(): Promise<void> {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next('logout');
      this.utilitiesService.showToast('Sesión cerrada correctamente');
    });
    
  }

  public isAuthenticated(): string {
    return this.authenticationState.value;
  }

}