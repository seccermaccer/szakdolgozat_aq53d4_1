import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BejelentkezesRoutingModule } from './bejelentkezes-routing.module';
import {BejelentkezesComponent} from "./bejelentkezes.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    BejelentkezesComponent
  ],
  imports: [
    CommonModule,
    BejelentkezesRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class BejelentkezesModule { }
