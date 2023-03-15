import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KommentekRoutingModule } from './kommentek-routing.module';
import { KommentekComponent } from './kommentek.component';


@NgModule({
  declarations: [
    KommentekComponent
  ],
  imports: [
    CommonModule,
    KommentekRoutingModule
  ]
})
export class KommentekModule { }
