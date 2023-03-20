import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermekekRoutingModule } from './termekek-routing.module';
import { TermekekComponent } from './termekek.component';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    TermekekComponent
  ],
    imports: [
        CommonModule,
        TermekekRoutingModule,
        FormsModule,
        MatIconModule
    ]
})
export class TermekekModule { }
