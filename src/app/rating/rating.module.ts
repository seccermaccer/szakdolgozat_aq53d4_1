import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RatingComponent
  ],
    imports: [
        CommonModule,
        RatingRoutingModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class RatingModule { }
