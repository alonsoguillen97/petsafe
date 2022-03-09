import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugioProfilePageRoutingModule } from './refugio-profile-routing.module';

import { RefugioProfilePage } from './refugio-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefugioProfilePageRoutingModule
  ],
  declarations: [RefugioProfilePage]
})
export class RefugioProfilePageModule {}
