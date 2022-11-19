import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolunkRoutingModule } from './rolunk-routing.module';
import {RolunkComponent} from "./rolunk.component";


@NgModule({
  declarations: [
    RolunkComponent
  ],
  imports: [
    CommonModule,
    RolunkRoutingModule
  ]
})
export class RolunkModule { }
