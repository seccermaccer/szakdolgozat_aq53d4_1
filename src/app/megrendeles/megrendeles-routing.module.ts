import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MegrendelesComponent } from './megrendeles.component';

const routes: Routes = [{ path: '', component: MegrendelesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MegrendelesRoutingModule { }
