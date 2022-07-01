import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikedPetsPage } from './liked-pets.page';

const routes: Routes = [
  {
    path: '',
    component: LikedPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedPetsPageRoutingModule {}
