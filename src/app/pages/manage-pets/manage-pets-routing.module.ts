import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePetsPage } from './manage-pets.page';

const routes: Routes = [
  {
    path: '',
    component: ManagePetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePetsPageRoutingModule {}
