import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetInteriorPageRoutingModule } from './pet-interior-routing.module';

import { PetInteriorPage } from './pet-interior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetInteriorPageRoutingModule
  ],
  declarations: [PetInteriorPage]
})
export class PetInteriorPageModule {}
