import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeresesRoutingModule } from './kereses-routing.module';
import { KeresesComponent } from './kereses.component';


@NgModule({
  declarations: [
    KeresesComponent
  ],
  imports: [
    CommonModule,
    KeresesRoutingModule
  ]
})
export class KeresesModule { }
