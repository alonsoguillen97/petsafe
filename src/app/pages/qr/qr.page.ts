import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Pet } from 'src/app/models/Pet';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public scaned: string;
  public content: string[];
  public refugioname: string;
  public petname: string;
  public pet: Pet;

  constructor(public alertController: AlertController,
    private apiService: AuthService,
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escanea para obtener la información de una mascota',
      message: 'Pulsa el botón y fija la imagen del qr dentro del cuadrado que aparece en la cámara, una vez lo reconozca se abrirá automaticamente el perfil de la mascota escaneada.',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }


  scan1(){
    this.barcodeScanner.scan().then((status) =>{
      console.log('Scanned', status);
      this.scaned = status.text
      this.content = this.scaned.split(',');
      this.refugioname = this.content[0];
      this.petname = this.content[1];
      console.log("Refugio: ",this.refugioname);
      console.log("Mascota: ",this.petname);


      this.apiService.getEntity(`pet/${this.refugioname}/${this.petname}`).subscribe(async (pet: Pet) => {
        this.pet = pet;
        console.log(this.pet)
        this.navCtrl.navigateForward('/pet-interior', {
          state: {
            pet: this.pet
          }
        });
      });


      

      

      

    }).catch((e) =>{
      console.log('Error',e);
      
    })
  }

}
