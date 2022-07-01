import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestInteriorPage } from './request-interior.page';

const routes: Routes = [
  {
    path: '',
    component: RequestInteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestInteriorPageRoutingModule {}
