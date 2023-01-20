import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TermekService {

  constructor(private db: AngularFirestore) { }

  getProductsByCategory(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory2(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory3(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory4(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory5(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory6(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory7(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }

  getProductsByCategory8(category: string) {
    return this.db.collection('Products', ref => ref.where('category', '==', category)).valueChanges();
  }
}
