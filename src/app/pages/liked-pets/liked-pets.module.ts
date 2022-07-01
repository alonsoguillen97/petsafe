import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedPetsPageRoutingModule } from './liked-pets-routing.module';

import { LikedPetsPage } from './liked-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedPetsPageRoutingModule
  ],
  declarations: [LikedPetsPage]
})
export class LikedPetsPageModule {}
