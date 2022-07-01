import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileRefugioPageRoutingModule } from './edit-profile-refugio-routing.module';

import { EditProfileRefugioPage } from './edit-profile-refugio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfileRefugioPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditProfileRefugioPage]
})
export class EditProfileRefugioPageModule {}
