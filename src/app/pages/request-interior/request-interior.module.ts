import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestInteriorPageRoutingModule } from './request-interior-routing.module';

import { RequestInteriorPage } from './request-interior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestInteriorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RequestInteriorPage]
})
export class RequestInteriorPageModule {}