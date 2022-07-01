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
  {
    path: 'register-refugio',
    loadChildren: () => import('./pages/register-refugio/register-refugio.module').then( m => m.RegisterRefugioPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'create-pet',
    loadChildren: () => import('./pages/create-pet/create-pet.module').then( m => m.CreatePetPageModule)
  },
  {
    path: 'edit-pet',
    loadChildren: () => import('./pages/edit-pet/edit-pet.module').then( m => m.EditPetPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'liked-pets',
    loadChildren: () => import('./pages/liked-pets/liked-pets.module').then( m => m.LikedPetsPageModule)
  },
  {
    path: 'adoption-form',
    loadChildren: () => import('./pages/adoption-form/adoption-form.module').then( m => m.AdoptionFormPageModule)
  },
  {
    path: 'own-requests',
    loadChildren: () => import('./pages/own-requests/own-requests.module').then( m => m.OwnRequestsPageModule)
  },
  {
    path: 'edit-profile-refugio',
    loadChildren: () => import('./pages/edit-profile-refugio/edit-profile-refugio.module').then( m => m.EditProfileRefugioPageModule)
  },
  {
    path: 'edit-profile-user',
    loadChildren: () => import('./pages/edit-profile-user/edit-profile-user.module').then( m => m.EditProfileUserPageModule)
  },
  {
    path: 'request-interior',
    loadChildren: () => import('./pages/request-interior/request-interior.module').then( m => m.RequestInteriorPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'own-requests-user',
    loadChildren: () => import('./pages/own-requests-user/own-requests-user.module').then( m => m.OwnRequestsUserPageModule)
  },
  {
    path: 'pets-lost',
    loadChildren: () => import('./pages/pets-lost/pets-lost.module').then( m => m.PetsLostPageModule)
  },
  {
    path: 'create-pet-lost',
    loadChildren: () => import('./pages/create-pet-lost/create-pet-lost.module').then( m => m.CreatePetLostPageModule)
  },
  {
    path: 'pets-no-login',
    loadChildren: () => import('./pages/pets-no-login/pets-no-login.module').then( m => m.PetsNoLoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }