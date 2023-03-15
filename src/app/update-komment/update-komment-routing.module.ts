import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateKommentComponent } from './update-komment.component';

const routes: Routes = [{ path: '', component: UpdateKommentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateKommentRoutingModule { }
