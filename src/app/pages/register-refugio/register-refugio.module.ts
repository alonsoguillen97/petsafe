import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterRefugioPageRoutingModule } from './register-refugio-routing.module';

import { RegisterRefugioPage } from './register-refugio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterRefugioPageRoutingModule
  ],
  declarations: [RegisterRefugioPage]
})
export class RegisterRefugioPageModule {}
