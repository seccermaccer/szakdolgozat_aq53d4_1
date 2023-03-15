import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegrendelesRoutingModule } from './megrendeles-routing.module';
import { MegrendelesComponent } from './megrendeles.component';
import {KosarModule} from "../kosar/kosar.module";


@NgModule({
  declarations: [
    MegrendelesComponent
  ],
  imports: [
    CommonModule,
    MegrendelesRoutingModule,
    KosarModule
  ]
})
export class MegrendelesModule { }
