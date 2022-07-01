import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnRequestsUserPageRoutingModule } from './own-requests-user-routing.module';

import { OwnRequestsUserPage } from './own-requests-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnRequestsUserPageRoutingModule
  ],
  declarations: [OwnRequestsUserPage]
})
export class OwnRequestsUserPageModule {}
