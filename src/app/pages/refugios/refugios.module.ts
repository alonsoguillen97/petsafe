import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugiosPageRoutingModule } from './refugios-routing.module';

import { RefugiosPage } from './refugios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefugiosPageRoutingModule
  ],
  declarations: [RefugiosPage]
})
export class RefugiosPageModule {}
