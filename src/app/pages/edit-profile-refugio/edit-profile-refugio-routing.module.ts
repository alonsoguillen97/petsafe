import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfileRefugioPage } from './edit-profile-refugio.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfileRefugioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRefugioPageRoutingModule {}
