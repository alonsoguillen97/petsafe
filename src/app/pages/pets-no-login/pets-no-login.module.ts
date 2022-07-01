import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsNoLoginPageRoutingModule } from './pets-no-login-routing.module';

import { PetsNoLoginPage } from './pets-no-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsNoLoginPageRoutingModule
  ],
  declarations: [PetsNoLoginPage]
})
export class PetsNoLoginPageModule {}
