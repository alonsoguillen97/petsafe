import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefugiosPage } from './refugios.page';

const routes: Routes = [
  {
    path: '',
    component: RefugiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefugiosPageRoutingModule {}
