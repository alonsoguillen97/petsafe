import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.module').then( m => m.PetsPageModule)
  },
  {
    path: 'refugios',
    loadChildren: () => import('./pages/refugios/refugios.module').then( m => m.RefugiosPageModule)
  },
  {
    path: 'profile-view',
    loadChildren: () => import('./pages/profile-view/profile-view.module').then( m => m.ProfileViewPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'pet-interior',
    loadChildren: () => import('./pages/pet-interior/pet-interior.module').then( m => m.PetInteriorPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'refugio-interior',
    loadChildren: () => import('./pages/refugio-interior/refugio-interior.module').then( m => m.RefugioInteriorPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'refugio-profile',
    loadChildren: () => import('./pages/refugio-profile/refugio-profile.module').then( m => m.RefugioProfilePageModule)
  },
  {
    path: 'manage-pets',
    loadChildren: () => import('./pages/manage-pets/manage-pets.module').then( m => m.ManagePetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
