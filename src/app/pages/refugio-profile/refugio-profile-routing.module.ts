import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefugioProfilePage } from './refugio-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RefugioProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefugioProfilePageRoutingModule {}
