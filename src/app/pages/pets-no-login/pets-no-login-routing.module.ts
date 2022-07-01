import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsNoLoginPage } from './pets-no-login.page';

const routes: Routes = [
  {
    path: '',
    component: PetsNoLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsNoLoginPageRoutingModule {}
