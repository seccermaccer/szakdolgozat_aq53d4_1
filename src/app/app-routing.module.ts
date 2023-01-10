import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectToHome = () => redirectLoggedInTo(['fooldal']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'bejelentkezes', loadChildren: () => import('./bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule),
    ...canActivate(redirectToHome)
  },
  {
    path: 'kosar', loadChildren: () => import('./kosar/kosar.module').then(m => m.KosarModule)
  },
  {
    path: 'regi', loadChildren: () => import('./regi/regi.module').then(m => m.RegiModule),
    ...canActivate(redirectToHome)
  },
  {
    path: 'rolunk', loadChildren: () => import('./rolunk/rolunk.module').then(m => m.RolunkModule)
  },
  {
    path: 'shop-menu', loadChildren: () => import('./shop-menu/shop-menu.module').then(m => m.ShopMenuModule)
  },
  {
    path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule) },
  { path: 'aszf', loadChildren: () => import('./aszf/aszf.module').then(m => m.AszfModule) },
  { path: 'fooldal', loadChildren: () => import('./fooldal/fooldal.module').then(m => m.FooldalModule) },
  { path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
