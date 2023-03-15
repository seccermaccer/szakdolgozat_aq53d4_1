import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KommentekComponent } from './kommentek.component';

const routes: Routes = [{ path: '', component: KommentekComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KommentekRoutingModule { }
