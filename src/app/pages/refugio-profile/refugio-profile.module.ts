import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugioProfilePageRoutingModule } from './refugio-profile-routing.module';

import { RefugioProfilePage } from './refugio-profile.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RefugioProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefugioProfilePage]
})
export class RefugioProfilePageModule {}
