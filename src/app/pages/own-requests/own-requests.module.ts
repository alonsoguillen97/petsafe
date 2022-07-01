import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnRequestsPageRoutingModule } from './own-requests-routing.module';

import { OwnRequestsPage } from './own-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnRequestsPageRoutingModule
  ],
  declarations: [OwnRequestsPage]
})
export class OwnRequestsPageModule {}
