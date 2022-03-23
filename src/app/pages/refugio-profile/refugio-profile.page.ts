import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-refugio-profile',
  templateUrl: './refugio-profile.page.html',
  styleUrls: ['./refugio-profile.page.scss'],
})
export class RefugioProfilePage implements OnInit {
  public user: User;

  constructor(private api: AuthService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.api.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
    });

    
  } 

}
