import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePetLostPage } from './create-pet-lost.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePetLostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePetLostPageRoutingModule {}
