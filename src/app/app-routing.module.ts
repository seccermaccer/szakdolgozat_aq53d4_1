import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectToHome = () => redirectLoggedInTo(['fooldal']);
const redirectToLogin = () => redirectUnauthorizedTo(['bejelentkezes']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fooldal',
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
  { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule),...canActivate(redirectToLogin) },
  { path: 'aszf', loadChildren: () => import('./aszf/aszf.module').then(m => m.AszfModule) },
  { path: 'fooldal', loadChildren: () => import('./fooldal/fooldal.module').then(m => m.FooldalModule) },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'update-profile', loadChildren: () => import('./update-profile/update-profile.module').then(m => m.UpdateProfileModule),...canActivate(redirectToLogin) },
  { path: 'termekek', loadChildren: () => import('./shop-menu/termekek/termekek.module').then(m => m.TermekekModule) },
  { path: 'rating', loadChildren: () => import('./rating/rating.module').then(m => m.RatingModule) },
  { path: 'kommentek', loadChildren: () => import('./kommentek/kommentek.module').then(m => m.KommentekModule) },
  { path: 'sajat-komment', loadChildren: () => import('./sajat-komment/sajat-komment.module').then(m => m.SajatKommentModule) },
  { path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
