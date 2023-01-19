import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermekekRoutingModule } from './termekek-routing.module';
import { TermekekComponent } from './termekek.component';


@NgModule({
  declarations: [
    TermekekComponent
  ],
  imports: [
    CommonModule,
    TermekekRoutingModule
  ]
})
export class TermekekModule { }
