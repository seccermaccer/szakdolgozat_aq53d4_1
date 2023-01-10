import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooldalRoutingModule } from './fooldal-routing.module';
import { FooldalComponent } from './fooldal.component';


@NgModule({
  declarations: [
    FooldalComponent
  ],
  imports: [
    CommonModule,
    FooldalRoutingModule
  ]
})
export class FooldalModule { }
