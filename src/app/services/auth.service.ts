import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage'
import { Observable, Subject } from 'rxjs';
import{endpoint, passportClient} from '../../settings/laravel'
import { registerLocaleData } from '@angular/common';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public userChanges = new Subject<User>();
  public httpOptions: any;

  

  constructor(public http: HttpClient,
    private storage: Storage) { }


   


    /**
   * Método para el registro básico
   * @param user 
   */
    public register(user: User) {
      console.log(environment.apiUrl + 'register')
      return this.http.post(environment.apiUrl + 'register', user);
    }

    /**
   * Método para el registro básico
   * @param user 
   */
     public registerrefugio(user: User) {
      console.log(environment.apiUrl + 'registerrefugio')
      return this.http.post(environment.apiUrl + 'registerrefugio', user);
    }

    /*
    register(user: User){
      
      console.log(`${endpoint}/api/register`);
      return this.http.post(`${endpoint}/api/register`,user).toPromise();
    }
    */

   async getUser(){
     let auth = await this.storage.get('auth');
     
     console.log(environment.apiUrl + 'user');
     return this.http.get(environment.apiUrl + 'user');
   }


    public login(user: User) {
      console.log(user);
      console.log(environment.apiUrl + 'login');
      return this.http.post<User>(environment.apiUrl + 'login', user);
    }

    public setTokenToHeaders(token: string): void {

      //Asignar token a las siguientes peticiones
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      };
    }

    public removeTokenToHeaders(): void {
      this.httpOptions = {
        headers: {}
      };
    }




    // ====================== Obtener entidades ================================

  public getEntity(entity: string, id?: number): Observable<any> {
    if (id)
      return this.http.get(environment.apiUrl + entity + '/' + id, this.httpOptions);
    else
      return this.http.get(environment.apiUrl + entity, this.httpOptions);
  }

  // ====================== Borrar entidades ================================

  public deleteEntity(entity: string, id: number): any {
    return this.http.delete(environment.apiUrl + entity + '/' + id, this.httpOptions);
  }

  // ====================== Añadir entidades ================================


  public addEntity(entity: string, params: any): any {
    return this.http.post(environment.apiUrl + entity, params, this.httpOptions);
  }
    
}

