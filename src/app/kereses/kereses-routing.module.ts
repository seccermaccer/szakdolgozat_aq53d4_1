import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeresesComponent } from './kereses.component';

const routes: Routes = [{ path: '', component: KeresesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeresesRoutingModule { }
