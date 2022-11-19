import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopMenuRoutingModule } from './shop-menu-routing.module';
import {ShopMenuComponent} from "./shop-menu.component";


@NgModule({
  declarations: [
    ShopMenuComponent
  ],
  imports: [
    CommonModule,
    ShopMenuRoutingModule
  ]
})
export class ShopMenuModule { }
