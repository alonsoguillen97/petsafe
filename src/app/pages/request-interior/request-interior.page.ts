import { Component, OnInit } from '@angular/core';
import { PetRequest } from 'src/app/models/PetRequest';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NavController, Platform } from '@ionic/angular';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-request-interior',
  templateUrl: './request-interior.page.html',
  styleUrls: ['./request-interior.page.scss'],
})
export class RequestInteriorPage implements OnInit {

  public user: User;
  request: PetRequest;
  pdfObj = null;
  public form: FormGroup;

  constructor(private file: File,private plt: Platform, private fileOpener: FileOpener,private utilitiesService: UtilitiesService,private formBuilder: FormBuilder,private apiService: AuthService,private navCtrl: NavController,) { }

  ngOnInit() {
    this.apiService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
      
    });
  this.request = history.state.request;

  this.form = this.formBuilder.group({
    status: [''],
  });
  }

  createPdf() {
    var docDefinition = {
      content: [
        { text: 'Formulario de adopción', style: 'header' },
        { text: new Date().toTimeString(), style: 'subheader' },
        { text: 'Usuario: '+this.request.user.name+' Teléfono: '+this.request.user.phone, style: 'header' },
        { text: 'Mascota: '+this.request.pet.name, style: 'header' },
        
        { text: 'Tipo de vivienda (casa, piso, otros)', style: 'subheader' },
        { text: this.request.q1 },

        { text: '¿Su vivienda es propia o alquilada?, en caso de alquilada, ¿Tienes permiso del dueño para tener una mascota?', style: 'subheader' },
        { text: this.request.q2 },

        { text: '¿Dispone de jardin/terraza/patio?', style: 'subheader' },
        { text: this.request.q3 },

        { text: '¿Dispone de un espacio habilitado para la mascota?', style: 'subheader' },
        { text: this.request.q4 },

        { text: '¿Cuántas personas conviven en la vivienda?', style: 'subheader' },
        { text: this.request.q5 },

        { text: '¿Alguno es alérgico a la mascota?', style: 'subheader' },
        { text: this.request.q6 },

        { text: '¿Viven niños en la vivienda?', style: 'subheader' },
        { text: this.request.q7 },

        { text: '¿Estará mucho tiempo el animal solo en casa?', style: 'subheader' },
        { text: this.request.q8 },

        { text: '¿Tiene actualmente mascotas en casa?', style: 'subheader' },
        { text: this.request.q9 },

        { text: '¿Ha tenido mascotas anteriormente?', style: 'subheader' },
        { text: this.request.q10 },

        { text: '¿Conoce los cuidados que requiere una mascota como la que deseas adoptar?', style: 'subheader' },
        { text: this.request.q11 },

        { text: '¿Cuenta con la capacidad económica para hacerse cargo de la mascota?', style: 'subheader' },
        { text: this.request.q12 },

        { text: '¿Porqué ha decidido adoptar una mascota?', style: 'subheader' },
        { text: this.request.q13 },

        { text: '¿Que motivos harían que quisiese devolver a la mascota a la asociación?', style: 'subheader' },
        { text: this.request.q14 },
 
        
 
        
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.utilitiesService.showToast('PDF creado correctamente');
  }
 
  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'formulario.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'formulario.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  async submitForm(){
    console.log(this.form.value);
    this.apiService.addEntity(`update-request/${this.request.id}`,this.form.value).subscribe((request: PetRequest) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast('Solicitud actualizada correctamente');
      this.navCtrl.navigateRoot('/tab1/refugio-profile');
    }, (error) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast('Error al editar la solicitud');
    });
    
   
  }
 
}


