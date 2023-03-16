import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeresesRoutingModule } from './kereses-routing.module';
import { KeresesComponent } from './kereses.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    KeresesComponent
  ],
    imports: [
        CommonModule,
        KeresesRoutingModule,
        FormsModule
    ]
})
export class KeresesModule { }
