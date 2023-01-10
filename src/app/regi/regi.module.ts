import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegiRoutingModule } from './regi-routing.module';
import {RegiComponent} from "./regi.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegiComponent
  ],
  imports: [
    CommonModule,
    RegiRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegiModule { }
