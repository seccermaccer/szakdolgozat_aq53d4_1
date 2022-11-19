import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BejelentkezesRoutingModule } from './bejelentkezes-routing.module';
import {BejelentkezesComponent} from "./bejelentkezes.component";


@NgModule({
  declarations: [
    BejelentkezesComponent
  ],
  imports: [
    CommonModule,
    BejelentkezesRoutingModule
  ]
})
export class BejelentkezesModule { }
