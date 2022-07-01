import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefugiosPageRoutingModule } from './refugios-routing.module';

import { RefugiosPage } from './refugios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefugiosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefugiosPage]
})
export class RefugiosPageModule {}
