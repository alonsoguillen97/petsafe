import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnRequestsUserPage } from './own-requests-user.page';

const routes: Routes = [
  {
    path: '',
    component: OwnRequestsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnRequestsUserPageRoutingModule {}
