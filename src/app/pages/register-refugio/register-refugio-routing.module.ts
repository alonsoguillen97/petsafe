import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRefugioPage } from './register-refugio.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRefugioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRefugioPageRoutingModule {}
