import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePetLostPageRoutingModule } from './create-pet-lost-routing.module';

import { CreatePetLostPage } from './create-pet-lost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePetLostPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreatePetLostPage]
})
export class CreatePetLostPageModule {}
