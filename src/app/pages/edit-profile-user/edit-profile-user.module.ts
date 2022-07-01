import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfileUserPageRoutingModule } from './edit-profile-user-routing.module';

import { EditProfileUserPage } from './edit-profile-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditProfileUserPageRoutingModule
  ],
  declarations: [EditProfileUserPage]
})
export class EditProfileUserPageModule {}
