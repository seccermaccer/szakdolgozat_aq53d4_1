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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {AngularFireModule} from "@angular/fire/compat";
import {FormsModule} from "@angular/forms";

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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatIconModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
