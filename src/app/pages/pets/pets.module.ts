import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsPageRoutingModule } from './pets-routing.module';

import { PetsPage } from './pets.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FiltersPage } from '../filters/filters.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsPageRoutingModule,
    ComponentsModule
  ],
  entryComponents: [FiltersPage],
  declarations: [PetsPage,FiltersPage]
})
export class PetsPageModule {}
