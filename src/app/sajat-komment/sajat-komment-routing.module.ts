import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SajatKommentComponent } from './sajat-komment.component';

const routes: Routes = [{ path: '', component: SajatKommentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SajatKommentRoutingModule { }
