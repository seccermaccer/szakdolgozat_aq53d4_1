import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RolunkComponent} from "./rolunk.component";

const routes: Routes = [{ path: '', component: RolunkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolunkRoutingModule { }
