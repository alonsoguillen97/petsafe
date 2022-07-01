import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppLoadingComponent } from './app-loading/app-loading.component';

import { HomePage } from '../pages/home/home.page';
import { AppUnauthorizedComponent } from './app-unauthorized/app-unauthorized.component';


const COMPONENTS = [
 
  AppLoadingComponent,
  AppUnauthorizedComponent
  
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule,
    FormsModule,
    
    ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class ComponentsModule { }
