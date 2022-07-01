import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnRequestsPage } from './own-requests.page';

const routes: Routes = [
  {
    path: '',
    component: OwnRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnRequestsPageRoutingModule {}
