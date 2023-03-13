import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermekekRoutingModule } from './termekek-routing.module';
import { TermekekComponent } from './termekek.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TermekekComponent
  ],
    imports: [
        CommonModule,
        TermekekRoutingModule,
        FormsModule
    ]
})
export class TermekekModule { }
