import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateKommentRoutingModule } from './update-komment-routing.module';
import { UpdateKommentComponent } from './update-komment.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UpdateKommentComponent
  ],
  imports: [
    CommonModule,
    UpdateKommentRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class UpdateKommentModule { }
