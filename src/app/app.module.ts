import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopMenuComponent } from './shop-menu/shop-menu.component';
import { BejelentkezesComponent } from './bejelentkezes/bejelentkezes.component';
import { RegiComponent } from './regi/regi.component';
import { KosarComponent } from './kosar/kosar.component';
import { RolunkComponent } from './rolunk/rolunk.component';

@NgModule({
  declarations: [
    AppComponent,
    //ShopMenuComponent,
    //BejelentkezesComponent,
    //RegiComponent,
    //KosarComponent,
    //RolunkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
