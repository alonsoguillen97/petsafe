import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefugioInteriorPage } from './refugio-interior.page';

const routes: Routes = [
  {
    path: '',
    component: RefugioInteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefugioInteriorPageRoutingModule {}
