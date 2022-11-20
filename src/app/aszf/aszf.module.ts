import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AszfRoutingModule } from './aszf-routing.module';
import { AszfComponent } from './aszf.component';


@NgModule({
  declarations: [
    AszfComponent
  ],
  imports: [
    CommonModule,
    AszfRoutingModule
  ]
})
export class AszfModule { }
