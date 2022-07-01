import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage{

  public user: User;

  constructor(private api: AuthService) { }

  

  ionViewWillEnter(){
    
    this.api.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
    });

    
  } 

}
