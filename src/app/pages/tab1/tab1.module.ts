import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      { path: '', redirectTo: 'pets', pathMatch: 'full' },
      { path: 'pets', loadChildren: () => import('../pets/pets.module').then(m => m.PetsPageModule) },
      { path: 'refugio-profile', loadChildren: () => import('../refugio-profile/refugio-profile.module').then(m => m.RefugioProfilePageModule) },
      { path: 'user-profile', loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule) },
      { path: 'info', loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule) },
      { path: 'qr', loadChildren: () => import('../qr/qr.module').then(m => m.QrPageModule) },
      { path: 'refugios', loadChildren: () => import('../refugios/refugios.module').then(m => m.RefugiosPageModule) },
   
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
