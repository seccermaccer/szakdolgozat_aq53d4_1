import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FooldalRoutingModule } from './fooldal-routing.module';
import { FooldalComponent } from './fooldal.component';


@NgModule({
  declarations: [
    FooldalComponent
  ],
  imports: [
    CommonModule,
    FooldalRoutingModule,
    HttpClientModule
  ]
})
export class FooldalModule { }
