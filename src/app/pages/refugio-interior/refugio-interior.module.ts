import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugioInteriorPageRoutingModule } from './refugio-interior-routing.module';

import { RefugioInteriorPage } from './refugio-interior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefugioInteriorPageRoutingModule
  ],
  declarations: [RefugioInteriorPage]
})
export class RefugioInteriorPageModule {}
