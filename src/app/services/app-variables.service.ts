import { Injectable } from '@angular/core';
import { User } from '../models/User';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppVariablesService {

  public user: User;
  
  public apiToken: string;

  
  public otherUsers: User[] = [];

  private intervalReloadUserData;

  constructor(private api: AuthService) { }

  

  /**
   * Recarga los datos del usuario cada X segundos
   * @param seconds Tiempo cada X segundos que se ejecutará la recarga (por defecto: 15)
   */
  public reloadUserDataEveryXSeconds(seconds = 15) {
    // 10 segundos después de la llamada a esta función, ejecutamos la recarga automática
    setTimeout(() => {
      this.intervalReloadUserData = setInterval(() => {
        this.api.getEntity('user').subscribe((user: User) => {
          this.user = user;
        })
      }, seconds * 1000);
    }, 10000);
  }

  public stopReloadUserData() {
    if (this.intervalReloadUserData) {
      clearInterval(this.intervalReloadUserData);
    }
  }
}
