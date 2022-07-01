import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-refugio-interior',
  templateUrl: './refugio-interior.page.html',
  styleUrls: ['./refugio-interior.page.scss'],
})
export class RefugioInteriorPage implements OnInit {

  refugio: User;
  ishidden= false;
  pets: Pet[]=[];
  user: User;

  constructor(private navCtrl: NavController,
    private apiService: AuthService,
    private emailComposer: EmailComposer) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.refugio = history.state.refugio;
    console.log(this.refugio);

    this.apiService.getEntity(`pets-user/${this.refugio.id}`).subscribe(async (pets: Pet[]) => {
      this.pets = pets;
    });

    this.apiService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
    });
  }

  goToInteriorMap() {
    
    this.navCtrl.navigateForward('/map', {
      state: {
        refugio: this.refugio
      }
    });
  }

  hide(){
    if(this.ishidden==false){
    this.ishidden=true;
    }else this.ishidden=false;
  }

  goToInteriorPet(pet) {
    
    this.navCtrl.navigateForward('/pet-interior', {
      state: {
        pet: pet
      }
    });
  }

  contacto(){
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        this.sendMail();
      }
     });
  }

  sendMail(){
    let email = {
      to: this.refugio.email,
      
      subject: 'Contacto con refugio',
      body: 'Usuario petsafe: '+this.user.name+'<br><br>Email petsafe: '+this.user.email+'<br><br>Esto es una solicitud de contacto con el refugio '+this.refugio.name+', también puedes realizar una solicitud de adopción desde el interior de una de las mascotas de este refugio o llamar al teléfono de contacto '+this.refugio.phone+'.<br><br>',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
