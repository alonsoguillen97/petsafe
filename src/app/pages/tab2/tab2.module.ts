import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
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
    Tab2PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
