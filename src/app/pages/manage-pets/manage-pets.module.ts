import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagePetsPageRoutingModule } from './manage-pets-routing.module';

import { ManagePetsPage } from './manage-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagePetsPageRoutingModule
  ],
  declarations: [ManagePetsPage]
})
export class ManagePetsPageModule {}
