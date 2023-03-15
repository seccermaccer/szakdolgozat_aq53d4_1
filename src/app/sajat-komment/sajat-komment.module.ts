import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SajatKommentRoutingModule } from './sajat-komment-routing.module';
import { SajatKommentComponent } from './sajat-komment.component';


@NgModule({
  declarations: [
    SajatKommentComponent
  ],
  imports: [
    CommonModule,
    SajatKommentRoutingModule
  ]
})
export class SajatKommentModule { }
