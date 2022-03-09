import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetInteriorPage } from './pet-interior.page';

const routes: Routes = [
  {
    path: '',
    component: PetInteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetInteriorPageRoutingModule {}
