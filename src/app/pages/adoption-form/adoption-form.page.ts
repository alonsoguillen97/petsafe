import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { Pet } from 'src/app/models/Pet';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.page.html',
  styleUrls: ['./adoption-form.page.scss'],
})
export class AdoptionFormPage implements OnInit {

  pet: Pet;
  public form: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder,
    private apiService: AuthService,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.pet = history.state.pet;

    this.apiService.getEntity('user').subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
    });


    this.form = this.formBuilder.group({
      details: ['', Validators.required],
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required],
      q5: ['', Validators.required],
      q6: ['', Validators.required],
      q7: ['', Validators.required],
      q8: ['', Validators.required],
      q9: ['', Validators.required],
      q10: ['', Validators.required],
      q11: ['', Validators.required],
      q12: ['', Validators.required],
      q13: ['', Validators.required],
      q14: ['', Validators.required],
      refugio_id: [''],
      pet_id: [''],
      petname: ['']      
    });
  }

  async submitForm(){

    console.log(this.pet.user.id)
    console.log(this.pet.id)

    this.form.patchValue({
      refugio_id: this.pet.user.id,
      pet_id: this.pet.id,
      petname: this.pet.name
    })
    console.log(this.form.value);
    //this.authService.register(this.form.value)

    this.apiService.addEntity('send-request', this.form.value).subscribe((pet: Pet) => {
      
      this.utilitiesService.dismissLoading();

      this.utilitiesService.showToast('Solicitud enviada correctamente');

     

      this.navCtrl.navigateRoot('/tab2/pets');

    }, (error) => {
      
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast('Error al enviar la solicitud');

    });
  }

 

  

}
