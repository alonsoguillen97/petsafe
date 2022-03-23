import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-refugios',
  templateUrl: './refugios.page.html',
  styleUrls: ['./refugios.page.scss'],
})
export class RefugiosPage implements OnInit {

  users: User[]=[];

  constructor(private apiService: AuthService,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.apiService.getEntity('refugios').subscribe(async (users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }


  goToInteriorRefugio(refugio) {
    
    this.navCtrl.navigateForward('/refugio-interior', {
      state: {
        refugio: refugio
      }
    });
  }

}
