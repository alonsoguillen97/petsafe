import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePetPageRoutingModule } from './create-pet-routing.module';

import { CreatePetPage } from './create-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreatePetPage]
})
export class CreatePetPageModule {}
