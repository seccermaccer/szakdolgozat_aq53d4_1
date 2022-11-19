import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegiComponent} from "./regi.component";

const routes: Routes = [{ path: '', component: RegiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegiRoutingModule { }
