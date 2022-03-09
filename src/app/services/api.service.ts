import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(public http: HttpClient) { }

  public getEntity(entity: string, id?: number): any {
    if (id)
      return this.http.get(environment.apiUrl + entity + '/' + id);
    else
      return this.http.get(environment.apiUrl + entity);
  }
}
