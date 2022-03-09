import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      { path: '', redirectTo: 'pets', pathMatch: 'full' },
      { path: 'pets', loadChildren: () => import('../pets/pets.module').then(m => m.PetsPageModule) },
      { path: 'refugio-profile', loadChildren: () => import('../refugio-profile/refugio-profile.module').then(m => m.RefugioProfilePageModule) },
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
    TabPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
